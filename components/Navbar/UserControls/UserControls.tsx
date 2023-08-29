"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const UserControls = () => {
  const { data: session } = useSession();

  if (!session) return null;
  return (
    <div className="flex items-center">
      <div>
        {session?.user?.image && (
          <Image
            height={40}
            width={40}
            alt="user picture"
            src={session?.user?.image}
          />
        )}
      </div>
      <div className="ml-2 flex flex-col text-sm">
        <Link href="/">{session?.user?.name}</Link>
        <div className="flex items-center space-x-1">
          <Link href="/">Settings</Link>
          <button
            className="text-[8px] font-semibold"
            onClick={() => signOut()}
          >
            (Logout)
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserControls;
