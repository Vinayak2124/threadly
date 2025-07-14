"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className= "bg-zinc-800 backdrop-blur-md border border-white/20 shadow-xl px-10 py-4 flex items-center justify-between text-yellow-500 relative">
  
      <div className="flex items-center gap-3">
        <Image src={"/favicon.png"} alt="logo" width={50} height={40} />
        <h2 className="hover:text-gray-300 font-semibold text-2xl">
          Threadly!
        </h2>
      </div>

      
      <div className="hidden md:flex items-center gap-6">
        <Link href={"/"}>
          <h2 className="hover:text-gray-300 text-lg font-medium">Home</h2>
        </Link>
        <Link href={"/forums"}>
          <h2 className="hover:text-gray-300 text-lg font-medium">Forums</h2>
        </Link>
        <Link href={"/chat"}>
          <h2 className="hover:text-gray-300 text-lg font-medium">UserChat</h2>
        </Link>
        <UserButton />
      </div>


      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

    
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-teal-100 border-t shadow-xl border-white/10 backdrop-blur-md p-4 flex flex-col gap-4 md:hidden z-50">
          <Link href={"/"} onClick={() => setIsOpen(false)}>
            <h2 className="hover:text-gray-300 text-lg font-medium">Home</h2>
          </Link>
          <Link href={"/forums"} onClick={() => setIsOpen(false)}>
            <h2 className="hover:text-gray-300 text-lg font-medium">Forums</h2>
          </Link>
          <Link href={"/chat"} onClick={() => setIsOpen(false)}>
            <h2 className="hover:text-gray-300 text-lg font-medium">UserChat</h2>
          </Link>
          <UserButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
