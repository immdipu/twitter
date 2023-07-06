"use client";
import React, { useEffect, useState } from "react";
import { BiChevronDown, BiWorld, BiImage } from "react-icons/bi";
import { MdOutlineGifBox, MdPoll } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import clsx from "clsx";

const AddNewTweet = () => {
  const [tweetText, setTweetText] = useState<string | null>(null);
  const auth = useAppSelector((state) => state.auth);

  const handleSubmit = () => {
    console.log(tweetText);
  };

  return (
    <div className="text-white py-3 px-4 flex border-b-[0.1px] border-opacity-30 border-slate-600 gap-4">
      <div className="h-11 w-11 relative rounded-full overflow-hidden">
        <Image fill src={auth.profilePic!} alt="Avatar" />
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full pb-4 border-b-[0.1px] border-opacity-30 border-slate-600">
          <div className="flex gap-1 rounded-xl w-fit px-2 border text-sm border-sky-400 border-opacity-60 font-semibold text-sky-500 items-center">
            Everyone <BiChevronDown className="text-xl" />
          </div>
          <div
            contentEditable
            placeholder="What is happening?!"
            className="text-white w-full outline-none mt-6 pr-3 tweetform"
            onInput={(e) => {
              const content = e.target as HTMLDivElement;
              setTweetText(content.textContent);
            }}
          ></div>
          <div className="flex items-center text-sky-500 gap-2 text-sm mt-3 w-fit hover:bg-sky-500 hover:bg-opacity-10 rounded-2xl -translate-x-2 py-1 duration-300 px-2 cursor-pointer transition-colors  font-semibold">
            <BiWorld className="text-lg" /> Everyone can reply
          </div>
        </div>
        <div className="flex gap-2 items-center justify-between pt-4 px-3">
          <div className="flex gap-2">
            <BiImage className="text-xl" />
            <MdOutlineGifBox />
            <MdPoll />
            <BsEmojiSmile />
          </div>
          <button
            onClick={handleSubmit}
            className={clsx(
              "bg-blue-500 px-3 py-1 w-fit rounded-full",
              tweetText?.trim()
                ? "opacity-100 pointer-events-auto"
                : "opacity-70 pointer-events-none"
            )}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewTweet;
