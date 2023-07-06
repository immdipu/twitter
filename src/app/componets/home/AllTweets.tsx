"use client";
import React from "react";
import { getAllTweets } from "@/app/apis/TweetApi";
import { useQuery } from "@tanstack/react-query";
import MiniLoader from "../Loader/MiniLoader";

const AllTweets = () => {
  const { isLoading, error, data } = useQuery(["AllTweets"], getAllTweets);

  if (data) {
    console.log(data);
  }

  if (isLoading) {
    return (
      <div>
        <MiniLoader size={30} />
      </div>
    );
  }
  return <div></div>;
};

export default AllTweets;
