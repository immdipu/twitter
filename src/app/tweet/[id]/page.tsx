"use client";
import React from "react";
import SingleDetailTweet from "@/app/componets/singleTweet/SingleDetailTweet";

const page = ({ params }: any) => {
  return (
    <div>
      <SingleDetailTweet id={params.id} />
    </div>
  );
};

export default page;
