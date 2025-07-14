"use client";

import React, { useEffect, useState } from "react";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";
import { useUser } from "@clerk/nextjs";

const apiKey = "r95qd9xpcsdb";
const globalChannelId = "global-chat";

export default function GlobalChat() {
  const { user, isLoaded } = useUser();
  const [channel, setChannel] = useState(null);

  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: user?.publicMetadata?.token,
    userData: {
      id: user?.id,
      name: user?.firstName || "Guest",
      image: `https://getstream.io/random_png/?name=${user?.firstName}`,
    },
  });

  useEffect(() => {
    const init = async () => {
      if (!client || !user?.id) return;

      const channel = client.channel("messaging", globalChannelId);

      try {
        await channel.watch(); // 🔥 safer than create()
        setChannel(channel);
      } catch (error) {
        console.error("❌ Error joining global channel:", error);
      }
    };

    init();
  }, [client, user]);

  if (!isLoaded) return <div>Loading user...</div>;
  if (!client || !channel) return <div>Joining Global Chat...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader title="🌐 Global Chatroom" />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}
