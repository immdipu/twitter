import axios from "axios";
import { Request } from "@/utils/AxiosInterceptor";
import { loginInputTypes, loginResponseType } from "../types/authTypes";

export const LoginFn = async (data: loginInputTypes) => {
  const response = await axios.post<loginResponseType>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/login`,
    data
  );
  return response.data;
};
