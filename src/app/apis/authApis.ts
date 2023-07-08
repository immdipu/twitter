import axios from "axios";
import { Request } from "@/utils/AxiosInterceptor";
import {
  loginInputTypes,
  loginResponseType,
  SignupResponseTypes,
} from "../types/authTypes";

export const LoginFn = async (data: loginInputTypes) => {
  const response = await axios.post<loginResponseType>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/login`,
    data
  );
  return response.data;
};
export const SignupFn = async (data: loginInputTypes) => {
  const response = await axios.post<SignupResponseTypes>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user`,
    data
  );
  return response.data;
};

export const AutoLoginFn = async (token: string) => {
  const response = await axios.get<loginResponseType>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
