"use client";

import { topics } from "@src/constants/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Discover = () => {
  const params = useSearchParams();

  const activeTopic = params?.get("topic");

  const activeTopicStyle =
    "flex cursor-pointer items-center justify-center gap-2 rounded px-3 py-2 text-[#333333] hover:bg-primary xl:border-2 xl:border-[#E6C9A8] bg-[#E6C9A8]";
  const topicStyle =
    "flex cursor-pointer items-center justify-center gap-2 rounded px-3 py-2 text-black hover:bg-primary xl:border-2 xl:border-gray-300";

  return (
    <div className="xl:border-b-2 xl:border-gray-200">
      <p className="m-3 mt-4 hidden font-semibold text-gray-500 xl:block">
        Popular Topics
      </p>
      <div className="flex flex-col flex-wrap gap-3 lg:flex-row">
        {topics.map(({ name, icon }) => (
          <div className="" key={name}>
            <Link replace href={`/?topic=${name}`}>
              <div
                className={activeTopic === name ? activeTopicStyle : topicStyle}
              >
                <span className="text-2xl font-bold xl:text-lg">{icon}</span>
                <span className="hidden text-base font-medium capitalize xl:block">
                  {name}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Discover;
