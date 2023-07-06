"use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const MiniLoader = ({ size = 20 }: { size?: number }) => {
  return (
    <div>
      <ClipLoader color={"#ffffff"} size={size} />
    </div>
  );
};

export default MiniLoader;
