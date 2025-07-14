"use client";

import React, { useState, useEffect } from "react";
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

const ChatForum = ({ slug }) => {
  const { user, isLoaded } = useUser();
  const [channel, setChannel] = useState(null);

  const apiKey = "r95qd9xpcsdb";

  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: user?.publicMetadata?.token,
    userData: {
      id: user?.id,
      name: user?.firstName,
      image: `https://getstream.io/random_png/?name=${user?.firstName}`,
    },
  });

  useEffect(() => {
    if (!client || !user?.id) return;

    const channel = client.channel("messaging", slug, {
      image: "https://getstream.io/random_png/?name=react",
      name: slug,
      members: [user.id],
    });

    setChannel(channel);
  }, [client, slug, user]);

  if (!isLoaded) return <div>Loading user...</div>;
  if (!client || !channel) return <div>Setting up chat...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatForum;
