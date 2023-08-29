"use client";

import RegisterForm from "@src/components/RegisterForm/RegisterForm";
import { createOrGetUser } from "@src/lib/sanity";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { useMemo } from "react";

const Page = () => {
  return (
    <SessionProvider>
      <RegisterForm />
    </SessionProvider>
  );
};
export default Page;
