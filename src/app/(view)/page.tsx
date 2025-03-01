"use client";
import TextMe from "@/components/ui/chat/text";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div className="flex-1 relative">
      <ScrollArea className="absolute inset-0">
        <div className="flex flex-col p-4 gap-2">
          <TextMe
            name="User"
            type="you"
            text="Long message that should be scrollable when it gets very long. This is just an example of a longer message that might appear in your chat interface."
          />
          <TextMe name="User2" type="me" text="Hello User" />
          <TextMe
            name="User"
            type="you"
            text="Another long message that should be scrollable when it gets very long. This is just an example of a longer message that might appear in your chat interface."
          />
          <TextMe name="User2" type="me" text="Hello User" />
          <TextMe
            name="User"
            type="you"
            text="Long message that should be scrollable when it gets very long. This is just an example of a longer message that might appear in your chat interface."
          />
          <TextMe name="User2" type="me" text="Hello User" />
          <TextMe
            name="User"
            type="you"
            text="Another long message that should be scrollable when it gets very long. This is just an example of a longer message that might appear in your chat interface."
          />
          <TextMe name="User2" type="me" text="Hello User" />
          <TextMe
            name="User"
            type="you"
            text="Long message that should be scrollable when it gets very long. This is just an example of a longer message that might appear in your chat interface."
          />
          <TextMe name="User2" type="me" text="Hello User" />
          <TextMe
            name="User"
            type="you"
            text="Another long message that should be scrollable when it gets very long. This is just an example of a longer message that might appear in your chat interface."
          />
          <TextMe name="User2" type="me" text="Hello User" />
          <TextMe
            name="User"
            type="you"
            text="Long message that should be scrollable when it gets very long. This is just an example of a longer message that might appear in your chat interface."
          />
          <TextMe name="User2" type="me" text="Hello User" />
          <TextMe
            name="User"
            type="you"
            text="Another long message that should be scrollable when it gets very long. This is just an example of a longer message that might appear in your chat interface."
          />
          <TextMe name="User2" type="me" text="Hello User" />

          <div ref={scrollRef} />
        </div>
      </ScrollArea>
    </div>
  );
}
