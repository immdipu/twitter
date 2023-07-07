"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import {
  PostedByTypes,
  retweetDataTypes,
  TweetReplyTypes,
} from "@/app/types/TweetTypes";
import { AiOutlineClose } from "react-icons/ai";
import moment from "moment";
import { useAppSelector } from "@/redux/hooks";
import MiniLoader from "../Loader/MiniLoader";
import { ReplyTweets } from "@/app/apis/TweetApi";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";

interface TweetButtonsProps {
  postId: string;
  likes: string[];
  retweets: string[];
  type: "tweet" | "reply" | "retweet";
  replies: string[];
  content?: string;
  postedBy: PostedByTypes;
  createdAt?: string;
  retweetData?: retweetDataTypes;
  replyTo?: retweetDataTypes;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const ReplyModal: React.FC<TweetButtonsProps> = ({
  postId,
  likes,
  retweets,
  replies,
  type,
  content,
  postedBy,
  createdAt,
  retweetData,
  replyTo,
  setShowModal,
}) => {
  const queryClient = useQueryClient();
  const user = useAppSelector((state) => state.auth);
  const [reply, setReply] = useState("");

  const ReplyMutate = useMutation(
    (data: TweetReplyTypes) => ReplyTweets(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["AllTweets"]);
        setShowModal(false);
      },
    }
  );

  const handleReply = () => {
    let data = {
      content: reply,
      replyTo: postId,
    };
    ReplyMutate.mutate(data);
  };

  return (
    <div className="border bg-neutral-900 rounded-2xl border-neutral-500 border-opacity-30 min-w-[35rem]">
      <section className="">
        <div className="h-7 flex justify-end cursor-pointer  px-4 pt-3 ">
          <AiOutlineClose
            className="text-xl"
            onClick={() => setShowModal(false)}
          />
        </div>
        <section className=" ml-5 relative pb-2">
          <div className=" bg-gray-300 w-[2px] bg-opacity-30 absolute top-0 bottom-0 left-5 " />
          <section className=" mt-2   flex gap-3 ">
            <div className="h-11  w-11 relative rounded-full overflow-hidden">
              <Image fill src={postedBy.profilePic} alt="Avatar" />
            </div>
            <section className="flex flex-col gap-1 items-start ">
              <div className="flex gap-1 items-center ">
                <span className="font-medium">{postedBy.firstName}</span>
                <span className="font-medium">{postedBy.lastName}</span>
                <div className="ml-1">
                  <span className="text-neutral-400 text-sm">
                    @{postedBy.username}
                  </span>
                </div>
                <div className="w-1 h-1 mx-2 bg-neutral-500 rounded-full" />
                <span className="text-sm text-neutral-300">
                  {moment(createdAt).fromNow()}
                </span>
              </div>
              <section className="font-light text-sm mt-1">
                {type === "retweet" ? retweetData?.content : content}
              </section>
              <p className="text-sm text-neutral-500 mt-8">
                Replying to{" "}
                <span className="text-blue-700">@{postedBy.username}</span>
              </p>
            </section>
          </section>
        </section>
        <section className="flex pl-5  gap-3">
          <div className="h-11 flex-shrink-0  w-11 relative rounded-full overflow-hidden">
            <Image fill src={user.profilePic!} alt="Avatar" />
          </div>
          <textarea
            name=""
            id=""
            onChange={(e) => setReply(e.target.value)}
            rows={5}
            placeholder="Tweet your reply"
            autoFocus
            className=" w-full px-0 focus:outline-none focus:ring-0 focus-within:border-none bg-neutral-900 placeholder:text-xl outline-none border-none"
          ></textarea>
        </section>
        <section className="flex justify-end px-5 py-4">
          <button
            onClick={handleReply}
            className={clsx(
              "bg-blue-500 px-3 py-1 w-20 rounded-full",
              reply?.trim()
                ? "opacity-100 pointer-events-auto"
                : "opacity-70 pointer-events-none",
              ReplyMutate.isLoading
                ? " pointer-events-none"
                : " pointer-events-auto"
            )}
          >
            {ReplyMutate.isLoading ? (
              <>
                <MiniLoader />
              </>
            ) : (
              " Tweet"
            )}
          </button>
        </section>
      </section>
    </div>
  );
};

export default ReplyModal;
