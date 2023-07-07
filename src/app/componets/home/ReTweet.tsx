import React from "react";
import { SingleTweetTypes } from "@/app/types/TweetTypes";
import Image from "next/image";
import { FaRetweet } from "react-icons/fa";
import { useAppSelector } from "@/redux/hooks";
import { TbMessageCircle } from "react-icons/tb";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import moment from "moment";
import TweetButtons from "./TweetButtons";

const ReTweet: React.FC<SingleTweetTypes> = ({
  _id,
  content,
  postedBy,
  likes,
  retweetUsers,
  replyTo,
  retweetData,
  createdAt,
  type,
}) => {
  const user = useAppSelector((state) => state.auth);
  const formattedDate = moment(createdAt).fromNow();
  return (
    <>
      <div className="border border-gray-500 border-opacity-25  px-3 pb-2 pt-1">
        <div className="flex items-center pl-7 py-2">
          <FaRetweet className="text-slate-400 text-xl mx-1" />
          <div className="flex text-slate-400 gap-1 items-center">
            {postedBy.username === user.username ? (
              <span className="font-medium">You</span>
            ) : (
              <>
                <span className="font-medium">{postedBy.firstName}</span>
                <span className="font-medium">{postedBy.lastName}</span>
              </>
            )}

            <span>Reweeted</span>
            <div className="w-1 h-1 mx-2 bg-neutral-500 rounded-full" />
            <span className="text-sm text-neutral-300">{formattedDate}</span>
          </div>
        </div>

        <section className="flex gap-4">
          <div className="h-11 w-11 relative rounded-full overflow-hidden">
            <Image fill src={retweetData?.postedBy.profilePic!} alt="Avatar" />
          </div>
          <div className="flex flex-col text-green-50 w-full  pr-20">
            <section className="flex gap-1">
              <span className="font-medium">
                {retweetData?.postedBy.firstName}
              </span>
              <span className="font-medium">
                {retweetData?.postedBy.lastName}
              </span>
              <div className="ml-1">
                <span className="text-neutral-400 text-xs">
                  @{retweetData?.postedBy.username}
                </span>
              </div>
            </section>
            <section className="font-light text-sm mt-1">
              <p>{retweetData?.content}</p>
            </section>
            <TweetButtons
              postId={retweetData?._id!}
              likes={retweetData?.likes!}
              type={type}
              retweets={retweetData?.retweetUsers!}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default ReTweet;
