"use client";
import React, { useEffect } from "react";
import { getSingleTweet } from "@/app/apis/TweetApi";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import TweetButtons from "../home/TweetButtons";
import ReplyTweet from "../home/ReplyTweet";
import moment from "moment";

const SingleDetailTweet = ({ id }: { id: string }) => {
  const { isLoading, error, data } = useQuery(["SingleTweet", id], () =>
    getSingleTweet(id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <section className="flex gap-4 bg-black px-6">
        <div className="h-11 w-11 relative rounded-full overflow-hidden">
          <Image fill src={data?.postedBy.profilePic!} alt="Avatar" />
        </div>
        <div className="flex flex-col text-green-50 w-full  pr-20">
          <section className="flex gap-1 items-center ">
            <span className="font-medium">{data?.postedBy.firstName}</span>
            <span className="font-medium">{data?.postedBy.lastName}</span>
            <div className="ml-1">
              <span className="text-neutral-400 text-sm">
                @{data?.postedBy.username}
              </span>
            </div>
            <div className="w-1 h-1 mx-2 bg-neutral-500 rounded-full" />
            <span className="text-sm text-neutral-300">
              {moment(data?.createdAt).fromNow()}
            </span>
          </section>
          <section className="font-light text-sm mt-1">
            <p>{data?.content}</p>
          </section>
          <TweetButtons
            postId={data?._id!}
            likes={data?.likes!}
            type={data?.type!}
            replies={data?.replies!}
            retweets={data?.retweetUsers!}
            postedBy={data?.postedBy!}
            createdAt={data?.createdAt!}
            content={data?.content!}
          />
        </div>
      </section>
      <section className="bg-black">
        {data &&
          data?.replies.length > 0 &&
          data?.replies.map((item) => {
            return <ReplyTweet {...item} key={item._id} />;
          })}
      </section>
    </div>
  );
};

export default SingleDetailTweet;
