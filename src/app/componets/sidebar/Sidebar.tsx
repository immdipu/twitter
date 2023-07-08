import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { AiOutlineHome, AiOutlineBell, AiOutlineMessage } from "react-icons/ai";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import { MdPersonOutline } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Sidebar = () => {
  const auth = useAppSelector((state) => state.auth);
  const pathname = usePathname();
  const [showsidebar, setShowsidebar] = useState(false);

  return (
    <div className="">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        onClick={() => setShowsidebar(!showsidebar)}
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      {showsidebar && (
        <div
          onClick={() => setShowsidebar(!showsidebar)}
          className="bg-black bg-opacity-60 fixed inset-0 z-30"
        />
      )}

      <aside
        id="default-sidebar"
        className={clsx(
          "fixed  top-0 border-r border-gray-400 left-0 z-40 w-64 h-screen   transition-transform ",
          showsidebar
            ? " max-md:translate-x-0"
            : "max-md:max-md:-translate-x-full"
        )}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-800 dark:bg-gray-800">
          <ul className="space-y-4 mt-7 ml-2 font-medium">
            <li>
              <Link
                href="/home"
                className={clsx(
                  "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                  pathname === "/home" ? "bg-gray-200" : " "
                )}
              >
                <AiOutlineHome className="text-2xl text-neutral-300" />
                <span className="ml-3 mt-1 text-lg text-gray-500">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/search"
                className={clsx(
                  "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                  pathname === "/search" ? "bg-gray-200" : " "
                )}
              >
                <BsSearch className="text-xl text-neutral-300" />
                <span className="ml-3 mt-1 text-lg text-gray-500">Explore</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiOutlineBell className="text-2xl text-neutral-300" />
                <span className="ml-3 mt-1 text-lg text-gray-500">
                  Notifications
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiOutlineMessage className="text-2xl text-neutral-300" />
                <span className="ml-3 mt-1 text-lg text-gray-500">
                  Messages
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdPersonOutline className="text-2xl text-neutral-300" />
                <span className="ml-3 mt-1 text-lg text-gray-500">Profile</span>
              </Link>
            </li>
          </ul>
          <section className="absolute items-center bg-neutral-700 bottom-0 left-0 right-0 px-5 gap-3 py-8 flex">
            {auth.profilePic && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={auth.profilePic}
                alt={auth.username!}
                className="w-9 h-9 rounded-full"
              />
            )}
            <div className="flex flex-col font-medium mt-1 gap-1">
              <h4>{auth.firstName}</h4>
              <p className="text-sm  text-neutral-500">{auth.username}</p>
            </div>
          </section>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
