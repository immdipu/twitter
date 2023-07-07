"use client";
import React, { useState } from "react";
import { TbMessageCircle } from "react-icons/tb";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { LikeTweet, ReTweetTweet } from "@/app/apis/TweetApi";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useAppSelector } from "@/redux/hooks";
import ReplyModal from "./ReplyModal";
import { PostedByTypes, retweetDataTypes, Reply } from "@/app/types/TweetTypes";

interface TweetButtonsProps {
  postId: string;
  likes: string[];
  retweets: string[];
  type: "tweet" | "reply" | "retweet";
  replies: string[] | Reply[];
  content?: string;
  postedBy: PostedByTypes;
  createdAt?: string;
  retweetData?: retweetDataTypes;
  replyTo?: retweetDataTypes;
}

const TweetButtons: React.FC<TweetButtonsProps> = ({
  postId,
  likes,
  retweets,
  replies,
  type,
  content,
  postedBy,
  createdAt,
  retweetData,
  replyTo,
}) => {
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
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
        {showModal && (
          <section className="bg-black bg-opacity-10 fixed inset-0 z-40 grid place-content-center">
            <ReplyModal
              setShowModal={setShowModal}
              postId={postId}
              likes={likes}
              type={type}
              replies={replies}
              retweets={retweets}
              replyTo={replyTo}
              content={content}
              postedBy={postedBy}
              createdAt={createdAt}
              retweetData={retweetData}
            />
          </section>
        )}
        <button
          onClick={() => setShowModal(!showModal)}
          className="flex  items-center gap-1 w-16 "
        >
          <TbMessageCircle className="text-xl" />
          {replies.length > 0 && (
            <span className="text-sm text-gray-300">{replies.length}</span>
          )}
        </button>

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
