"use client";
import React from "react";
import { useEffect, useLayoutEffect } from "react";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import Sidebar from "./componets/sidebar/Sidebar";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import clsx from "clsx";
import { AutoLoginFn } from "./apis/authApis";
import { useMutation } from "@tanstack/react-query";
import { LoggedIn } from "@/redux/slice/authSlice";
import MiniLoader from "./componets/Loader/MiniLoader";

const GlobalApp = ({ children }: { children?: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const login = useMutation((data: any) => AutoLoginFn(data), {
    onSuccess: (data) => {
      dispatch(LoggedIn(data));
      if (pathname === "/" || pathname === "/signup") {
        router.push("/home");
      }
    },
    onError: (error) => {
      toast.error("Session Expired Login Again");
      // router.push("/");
      console.log(error);
    },
  });
  useEffect(() => {
    if (!user.isUserAuthenticated) {
      let token = localStorage.getItem("token");
      if (token) {
        login.mutate(token);
      } else {
        router.push("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.isUserAuthenticated]);

  return (
    <>
      {pathname === "/" || pathname === "/signup" ? "" : <Sidebar />}
      <div
        className={clsx(
          "max-w-5xl w-full border-r border-gray-500 border-opacity-30 max-md:pl-0",
          pathname === "/" || pathname === "/signup" ? "pl-0" : "pl-64 "
        )}
      >
        {(pathname === "/" || pathname === "/signup") && <>{children}</>}
        {login.isLoading && (
          <div className="absolute inset-0 grid place-content-center z-30">
            <MiniLoader size={30} />
          </div>
        )}
        {user.isUserAuthenticated && <>{children}</>}
      </div>
    </>
  );
};

export default GlobalApp;
