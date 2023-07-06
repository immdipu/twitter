"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useState } from "react";
import { LoginFn } from "@/app/apis/authApis";
import { toast } from "react-toastify";
import MiniLoader from "../Loader/MiniLoader";
import clsx from "clsx";
import { useAppDispatch } from "@/redux/hooks";
import { LoggedIn } from "@/redux/slice/authSlice";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const login = useMutation((data: any) => LoginFn(data), {
    onSuccess: (data) => {
      dispatch(LoggedIn(data));
      toast.success("Login successfully");
    },
    onError: (data: any) => {
      const msg: string = data.response.data;
      if (msg) {
        toast.error(msg);
      } else {
        toast.error("Login failed Try Again!");
      }
    },
  });

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let data = {
      username,
      password,
    };
    login.mutate(data);
  };

  return (
    <div className="border-2 h-full w-full max-w-5xl mx-auto mt-10 ">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your username or email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username or email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  onClick={HandleSubmit}
                  className={clsx(
                    "w-full text-white bg-primary-600 bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
                    login.isLoading
                      ? "pointer-events-none"
                      : "pointer-events-auto"
                  )}
                >
                  {login.isLoading ? <MiniLoader /> : "Sign in"}
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
