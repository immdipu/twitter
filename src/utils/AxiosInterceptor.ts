import axios, { AxiosInstance, AxiosStatic } from "axios";
import { toast } from "react-toastify";

export const Request = (): AxiosInstance => {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  console.log(URL);
  const token = localStorage.getItem("token");
  if (!token) {
    toast.error("Token expired Login Again", {
      position: "top-left",
    });
  }
  return axios.create({
    baseURL: URL,
    headers: { authorization: `Bearer ${token}` },
  });
};
