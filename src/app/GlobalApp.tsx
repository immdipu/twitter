"use client";
import React from "react";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

const GlobalApp = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const user = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (user.isUserAuthenticated) {
      router.push("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.isUserAuthenticated]);

  return <>{children}</>;
};

export default GlobalApp;
