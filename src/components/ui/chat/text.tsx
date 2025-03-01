import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

export default function TextMe({
  name,
  text,
  avatar,
  type,
}: {
  name?: string;
  text: string;
  avatar?: string;
  type: "me" | "you";
}) {
  return (
    <>
      {name ? (
        <div className={`w-full ${type == "you" ? "text-start" : "text-end"}`}>
          {name}
        </div>
      ) : (
        ""
      )}
      <div
        className={`w-full flex flex-row gap-2 break-words ${
          type == "me" ? "justify-end items-end" : "justify-start items-start"
        }`}
      >
        <div
          className={`!p-2 max-w-1/2 !px-3 text-sm  ${
            type == "me"
              ? "bg-zinc-200 "
              : "bg-zinc-900 text-background border order-2"
          } rounded-lg`}
        >
          {text}
        </div>
        <div className={`${type == "you" ? "order-1" : ""} h-full`}>
          <Avatar>
            {avatar ? (
              <AvatarImage src={avatar} />
            ) : (
              <AvatarImage src="https://github.com/shadcn.png" />
            )}
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
}
