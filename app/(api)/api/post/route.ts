import { allPostsQuery } from "@src/lib/queries";
import { client } from "@src/sanity/lib/client";
import { NextResponse } from "next/server";

export const GET = async () => {
  const query = allPostsQuery();
  const data = await client.fetch(query);
  return NextResponse.json(data, { status: 200 });
};
