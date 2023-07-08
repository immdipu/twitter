"use client";
import React from "react";
import { getAllTweets } from "@/app/apis/TweetApi";
import { useQuery } from "@tanstack/react-query";
import MiniLoader from "../Loader/MiniLoader";
import SingleTweet from "./SingleTweet";
import ReTweet from "./ReTweet";
import ReplyTweet from "./ReplyTweet";
import SingleTweetSkeleton from "../Loader/SingleTweetSkeleton";

const AllTweets = () => {
  const { isLoading, error, data } = useQuery(["AllTweets"], getAllTweets);

  if (isLoading) {
    return (
      <div className="w-full">
        <SingleTweetSkeleton />
        <SingleTweetSkeleton />
        <SingleTweetSkeleton />
        <SingleTweetSkeleton />
      </div>
    );
  }

  return (
    <div>
      {data &&
        data?.length > 0 &&
        data.map((item) => {
          if (item.type === "retweet") {
            return <ReTweet {...item} key={item._id} />;
          }

          if (item.type === "reply") {
            return <ReplyTweet {...item} key={item._id} />;
          }

          return <SingleTweet {...item} key={item._id} />;
        })}
    </div>
  );
};

export default AllTweets;
