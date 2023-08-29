import { allPostsQuery } from "@src/lib/queries";
import { token } from "@src/sanity/env";
import { client } from "@src/sanity/lib/client";

import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: Request) => {
  const doc = await req.json();
  console.log(doc);
  client.createIfNotExists(doc, {
    token: token,
  });
  return NextResponse.json("works", { status: 200 });
  // try {
  //   const request = await req.body;
  //   const user = await request.json();
  //   console.log(user);
  //   client.createIfNotExists(user);
  //   return NextResponse.json("this works", { status: 200 });
  // } catch (error) {
  //   return NextResponse.json({ error: error }, { status: 300 });
  // }
};
