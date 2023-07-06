"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Request } from "@/utils/AxiosInterceptor";
import { LoginSignup } from "./componets/Auth";

export default function Home() {
  return (
    <div>
      <LoginSignup />
    </div>
  );
}
