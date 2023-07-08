import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PostedByTypes } from "@/app/types/TweetTypes";

const User: React.FC<PostedByTypes> = ({
  _id,
  firstName,
  lastName,
  profilePic,
  username,
}) => {
  return (
    <Link
      href={`/person/username`}
      className="flex gap-4 border hover:bg-neutral-900 border-neutral-500 border-opacity-30 py-4 px-4"
    >
      <div className="h-11 w-11 relative rounded-full overflow-hidden">
        <Image fill src={profilePic} alt="Avatar" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-gray-100 capitalize">
          {firstName} {lastName}
        </h2>
        <p className="text-neutral-400 text-sm">@{username}</p>
      </div>
    </Link>
  );
};

export default User;
