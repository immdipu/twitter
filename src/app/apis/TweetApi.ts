import { Request } from "@/utils/AxiosInterceptor";
import { SingleTweetTypes, TweetReplyTypes } from "../types/TweetTypes";

export const getAllTweets = async () => {
  const response = await Request().get<SingleTweetTypes[]>("/tweet");
  return response.data;
};

export const postTweet = async (data: string) => {
  const response = await Request().post<SingleTweetTypes>("/tweet", {
    content: data,
  });
  return response.data;
};

export const LikeTweet = async (postId: string) => {
  const response = await Request().put(`/tweet/${postId}/like`);
  return response.data;
};

export const ReTweetTweet = async (postId: string) => {
  const response = await Request().post(`tweet/${postId}/retweet`);
  return response.data;
};

export const ReplyTweets = async (data: TweetReplyTypes) => {
  const response = await Request().post("/tweet/reply", data);
  return response.data;
};
