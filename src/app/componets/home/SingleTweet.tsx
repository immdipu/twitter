import React from "react";
import { SingleTweetTypes } from "@/app/types/TweetTypes";
import Image from "next/image";
import TweetButtons from "./TweetButtons";
import moment from "moment";
import Link from "next/link";

const SingleTweet: React.FC<SingleTweetTypes> = ({
  _id,
  content,
  postedBy,
  likes,
  retweetUsers,
  replyTo,
  retweetData,
  replies,
  createdAt,
  type,
}) => {
  const formattedDate = moment(createdAt).fromNow();

  return (
    <Link
      href={`/tweet/${_id}`}
      className="border border-gray-500 block border-opacity-25 px-3 py-3"
    >
      <section className="flex gap-4">
        <div className="h-11 w-11 relative rounded-full overflow-hidden">
          <Image fill src={postedBy.profilePic} alt="Avatar" />
        </div>
        <div className="flex flex-col text-green-50 w-full  pr-20">
          <section className="flex gap-1 items-center ">
            <span className="font-medium">{postedBy.firstName}</span>
            <span className="font-medium">{postedBy.lastName}</span>
            <div className="ml-1">
              <span className="text-neutral-400 text-sm">
                @{postedBy.username}
              </span>
            </div>
            <div className="w-1 h-1 mx-2 bg-neutral-500 rounded-full" />
            <span className="text-sm text-neutral-300">{formattedDate}</span>
          </section>
          <section className="font-light text-sm mt-1">
            <p>{content}</p>
          </section>
          <TweetButtons
            postId={_id}
            likes={likes}
            type={type}
            replies={replies}
            retweets={retweetUsers}
            postedBy={postedBy}
            createdAt={createdAt}
            content={content}
          />
        </div>
      </section>
    </Link>
  );
};

export default SingleTweet;
