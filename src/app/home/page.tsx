import React from "react";
import { AddNewTweet, AllTweets } from "../componets";

const page = () => {
  return (
    <div className="bg-neutral-800">
      <div className="sticky top-0 backdrop-blur-sm z-20 bg-neutral-800 bg-opacity-80">
        <AddNewTweet />
      </div>
      <section>
        <AllTweets />
      </section>
    </div>
  );
};

export default page;
