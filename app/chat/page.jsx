// app/chat/page.tsx
import React from "react";
import GlobalChat from "@/app/_components/GlobalChat";

export default function ChatPage() {
  return (
    <div className="p-4 mx-40 shadow-lg my-5 border-2 rounded-2xl">
      <GlobalChat />
    </div>
  );
}
