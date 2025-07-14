import { clerkClient } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";
import { StreamChat } from "stream-chat";

const api_key = "r95qd9xpcsdb";
const api_secret =
  "d2q9ye6dnyfk22r58w3udbc9qtek78fbxamp6ugj5wx62bvprwug5j85rugg4mzt";
// const user_id = "john";

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  // Create User Token

  const user = await request.json();
  const userId = user.data?.id;

//   if (!userId) {
//     return NextResponse.json({ error: "User ID missing" }, { status: 400 });
//   }

  const token = serverClient.createToken(user.data?.id);
  console.log("A New user Created..!");
  const client = await clerkClient();
  await serverClient.upsertUser({
    id: userId,
    name: user.data?.name || "Unnamed User",
    image: user.data?.image || undefined,
  });
  await client.users.updateUserMetadata(user.data?.id, {
    publicMetadata: {
      token: token,
    },
  });
  // acessig to all the user for all the chats
  const slug = [
    "Javascript-Discussion",
    "React-Discussion",
    "Nodejs-Discussion",
    "Nextjs-Discussion",
    "Java-Discussion",
    "Python-Discussion",
  ];

  for (const topic of slug) {
    const channel = serverClient.channel("messaging", topic, {
      image: "https://getstream.io/random_png/?name=" + topic,
      name: topic.replace(/[^a-zA-Z0-9_!-]/g, "-"),
      created_by_id: userId,
    });

    await channel.create();
    await channel.addMembers([userId]);

    const channel2 = serverClient.channel("messaging", "global-chat", {
      name: "Global Chatroom",
      image: "https://getstream.io/random_png/?name=global",
    });

    try {
      await channel2.create(); // only once by server
    } catch (err) {
      if (err.code !== 16) {
        console.error("Failed to create channel:", err);
      }
    }

    await channel2.addMembers([userId]); // ✅ add each user here!
  }

  console.log(" New user created and added to channels");

  return NextResponse.json({ message: "User created and added to channels." });
}
