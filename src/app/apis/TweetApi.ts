import { Request } from "@/utils/AxiosInterceptor";

export const getAllTweets = async () => {
  const response = await Request().get("/tweet");
  return response.data;
};
