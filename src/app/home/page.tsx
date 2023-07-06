import React from "react";
import { AddNewTweet, AllTweets } from "../componets";

const page = () => {
  return (
    <div className="bg-neutral-800">
      <AddNewTweet />
      <section>
        <AllTweets />
      </section>
    </div>
  );
};

export default page;
