import { Request } from "@/utils/AxiosInterceptor";
import { SingleTweetTypes } from "../types/TweetTypes";

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
