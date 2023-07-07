"use client";
import React from "react";
import { TbMessageCircle } from "react-icons/tb";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { LikeTweet, ReTweetTweet } from "@/app/apis/TweetApi";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useAppSelector } from "@/redux/hooks";

interface TweetButtonsProps {
  postId: string;
  likes: string[];
  retweets: string[];
  type: "tweet" | "reply" | "retweet";
}

const TweetButtons: React.FC<TweetButtonsProps> = ({
  postId,
  likes,
  retweets,
  type,
}) => {
  const queryClient = useQueryClient();
  const user = useAppSelector((state) => state.auth);

  const LikeMutate = useMutation((postId: string) => LikeTweet(postId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["AllTweets"]);
    },
  });
  const ReTweetMutate = useMutation((postId: string) => ReTweetTweet(postId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["AllTweets"]);
    },
  });

  const HandleLike = () => {
    LikeMutate.mutate(postId);
  };

  const HandleReTweet = () => {
    ReTweetMutate.mutate(postId);
  };

  const isLiked = likes.includes(user.id!);
  const isRetweeted = retweets.includes(user.id!);

  return (
    <>
      <section className="flex my-3 justify-between">
        <TbMessageCircle className="text-xl" />

        <button
          onClick={HandleReTweet}
          className="flex  items-center gap-1 w-16 "
        >
          {isRetweeted ? (
            <AiOutlineRetweet className="text-xl text-pink-400 " />
          ) : (
            <AiOutlineRetweet className="text-xl " />
          )}
          {retweets.length > 0 && (
            <span className="text-sm text-gray-300">{retweets.length}</span>
          )}
        </button>
        <button onClick={HandleLike} className="flex  items-center gap-1 w-16 ">
          {isLiked ? (
            <AiFillHeart className="text-xl  text-pink-500" />
          ) : (
            <AiOutlineHeart className="text-xl  " />
          )}
          {likes.length > 0 && (
            <span className="text-sm text-gray-300">{likes.length}</span>
          )}
        </button>
      </section>
    </>
  );
};

export default TweetButtons;
