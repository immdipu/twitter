import React from "react";

const SingleTweetSkeleton = () => {
  return (
    <div>
      <div className="tweet p-4 bg-neutral-800 rounded-md mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="ml-4 flex-1">
            <div className="w-24 h-4 bg-neutral-700 mb-2"></div>
            <div className="w-20 h-4 bg-neutral-700"></div>
            <div className="w-32 h-4 bg-neutral-700 mt-2"></div>
            <div className="w-16 h-4 bg-neutral-700 mt-2"></div>
            <div className="w-16 h-4 bg-neutral-700 mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTweetSkeleton;
