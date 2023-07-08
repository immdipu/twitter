"use client";
import React, { useState } from "react";
import clsx from "clsx";
import MiniLoader from "../Loader/MiniLoader";
import { useMutation } from "@tanstack/react-query";
import { SearchFn } from "@/app/apis/TweetApi";
import { toast } from "react-toastify";
import User from "./User";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const Search = useMutation((data: string) => SearchFn(data), {
    onSuccess: (data) => {
      console.log(data);
      return data;
    },
    onError: (data: any) => {
      const msg: string = data.response.data;
      if (msg) {
        toast.error(msg);
      } else {
        toast.error("search failed Try Again!");
      }
    },
  });

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    Search.mutate(searchTerm);
  };

  return (
    <div>
      <section>
        <form onSubmit={onSubmitHandler}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-100 bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search tweets, persons..."
              required
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {Search.isLoading ? <MiniLoader /> : "Search"}
            </button>
          </div>
        </form>
      </section>
      <section>
        <section className="flex flex-col">
          {Search.data &&
            Search.data.users.length > 0 &&
            Search.data.users.map((item) => <User {...item} key={item._id} />)}
        </section>
      </section>
    </div>
  );
};

export default SearchComponent;
