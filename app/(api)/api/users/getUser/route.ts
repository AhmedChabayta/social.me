import {
  singleUserQuery,
  userCreatedPostsQuery,
  userLikedPostsQuery,
} from "@src/lib/queries";
import { client } from "@src/sanity/lib/client";

import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("userID");
  if (typeof id === "string") {
    const query = singleUserQuery(id);
    const SingleUserQuery = await client.fetch(query);

    const userPosts = userCreatedPostsQuery(id);
    const UserPostsQuery = await client.fetch(userPosts);

    const userLikedPosts = userLikedPostsQuery(id);
    const UserLikedQuery = await client.fetch(userLikedPosts);

    return NextResponse.json(
      { user: SingleUserQuery[0], UserPostsQuery, UserLikedQuery },
      { status: 200 }
    );
  }
};
