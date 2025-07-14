import ChatForum from "@/app/_components/ChatForum";
import React from "react";
// import { currentUser } from "@clerk/nextjs/server";


const Page = async({ params }) => {
  const slug = (await params).slug;
  const sanitizedSlug = slug.replace(/[^a-zA-Z0-9_!-]/g, "-");

  // const user = await currentUser()
  return (
    <div className="my-5 mx-50  rounded-2xl shadow-xl ">
      <ChatForum slug={sanitizedSlug} />
      {/* clerkUser={{id:user.id,name:user.firstName,token:user.publicMetadata.token}} */}
    </div>
  );
};

export default Page;
