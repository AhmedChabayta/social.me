"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Post } from "@src/types";
import moment from "moment";
import Image from "next/image";
import "node_modules/video-react/dist/video-react.css";
import { useState } from "react";
import PostAuthor from "./PostAuthor";

import { Player } from "video-react";
export type Image = {
  asset: {
    _id: string;
    url: string;
  };
};

export type VideoOrImage = {
  _type?: string;
  _key?: string;
  url?: string;
  asset: {
    _ref?: string;
    _type?: string;
    _id?: string;
    url?: string;
  };
};

const PostCard = ({ post }: { post: Post }) => {
  const { postedBy, images, videos } = post;
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [revealComments, setRevealComments] = useState(false);

  const imageArray: Image[] = images || [];
  const videoArray: VideoOrImage[] = videos || [];

  const mediaArray: VideoOrImage[] = [...imageArray, ...videoArray];
  const createdAt = moment(post._createdAt);
  const currentDate = moment();

  const timeSince = createdAt.from(currentDate, true);

  const previousMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : mediaArray.length - 1
    );
  };

  const nextMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex < mediaArray.length - 1 ? prevIndex + 1 : 0
    );
  };
  if (!post) return;
  return (
    <div className="mx-auto flex flex-col rounded border border-gray-400/50 bg-gray-200 p-3  shadow-md xl:max-w-[760px]">
      <div className="relative w-full rounded bg-black p-3">
        {mediaArray[currentMediaIndex] && (
          <>
            <div className="min-h-max w-full">
              {mediaArray?.[currentMediaIndex]?.asset?._type ? (
                <Player
                  aspectRatio="16:9"
                  playsInline
                  src={mediaArray?.[currentMediaIndex]?.asset.url}
                />
              ) : (
                mediaArray?.[currentMediaIndex]?.asset?.url && (
                  <Image
                    className="h-full w-full object-contain xl:max-w-none xl:bg-black"
                    alt=""
                    height={400}
                    width={400}
                    src={mediaArray?.[currentMediaIndex]?.asset?.url!}
                  />
                )
              )}
            </div>

            {mediaArray.length > 1 && (
              <>
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded bg-gray-400/50 object-contain p-2 text-white"
                    onClick={previousMedia}
                  >
                    <ChevronLeftIcon />
                  </button>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded bg-gray-400/50 object-contain p-2 text-white"
                    onClick={nextMedia}
                  >
                    <ChevronRightIcon />
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>

      <PostAuthor
        postedBy={postedBy}
        caption={post.caption}
        timeSince={timeSince}
      />
      {/* <div className="flex w-full flex-1 items-center justify-center">
          {revealComments ? (
            <div className="flex items-center justify-center">
              <button onClick={() => setRevealComments(false)}>
                <HiChevronDown />
              </button>
              <CommentsPage />
            </div>
          ) : (
            <button onClick={() => setRevealComments(true)}>
              <HiChevronDown />
            </button>
          )}
        </div> */}
    </div>
  );
};
export default PostCard;
