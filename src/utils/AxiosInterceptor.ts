import axios from "axios";
import { toast } from "react-toastify";

export const Request = () => {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  console.log(URL);
  const token = localStorage.getItem("token");
  if (!token) {
    return toast.error("Token expired Login Again", {
      position: "top-left",
    });
  }
  return axios.create({
    baseURL: URL,
    headers: { authorization: token },
  });
};
