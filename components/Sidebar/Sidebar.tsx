"use client";

import { Discover, MenuButtons, SidebarFooter } from "@src/components/Sidebar";
import useModalStore from "@src/store/useModalStore";
import Link from "next/link";
import { useState } from "react";

import { HomeIcon } from "@heroicons/react/24/solid";
import { RegisterModal } from "..";
import { Button } from "../Button";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const { isOpen, openModal } = useModalStore();

  const userProfile = false;

  return (
    <div className="relative flex h-full flex-col items-start justify-start">
      <div className="fixed right-0 z-50 m-2 mt-3 flex items-center justify-center text-xl xl:hidden">
        <MenuButtons
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      </div>
      {showSidebar && (
        <div className="z-20 flex h-full w-20 flex-col border-b border-r border-gray-400/50 bg-gray-200 p-3 xl:relative xl:w-400 xl:justify-evenly xl:border-b-0">
          <div className="border-gray-200 xl:border-b-2 xl:pb-4">
            <Link href="/">
              <div
                className={`flex cursor-pointer items-center justify-center gap-3 p-3 font-semibold text-[#333333] xl:justify-center`}
              >
                <p className="text-2xl">
                  <HomeIcon />
                </p>
                <span className="hidden w-full flex-1 text-xl xl:block">
                  For you
                </span>
              </div>
            </Link>
          </div>
          {!userProfile ? (
            <div className="hidden px-2 xl:block">
              <div className="pr-4">
                <Button
                  onClick={() => {
                    openModal();
                  }}
                >
                  LOGIN
                </Button>
              </div>
            </div>
          ) : (
            <button>Logout</button>
          )}

          <Discover />

          {/* <SuggestedAccounts /> */}
          <SidebarFooter />
        </div>
      )}

      {isOpen && <RegisterModal />}
    </div>
  );
};
export default Sidebar;
