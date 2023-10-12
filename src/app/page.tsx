"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, MouseEvent, Dispatch, FormEvent } from "react";
import SignUp from "@/utils/signUp";

export default function Home() {
  const router = useRouter();

  const onOptionClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="bg-orange-400 text-white w-screen h-screen gap-5 flex-col flex items-center justify-center">
      <h1 className="text-5xl font-bold texg-bg-orange-600">Welcome</h1>
      <div>
        <span
          onClick={() => onOptionClick("/signup")}
          className="bg-orange-300 text-center p-3 w-20 inline-block cursor-pointer  mr-5 text-white rounded-lg font-bold text-sm"
        >
          Sign Up
        </span>
        <span
          onClick={() => onOptionClick("/login")}
          className="bg-orange-300 p-3 w-20 text-center inline-block cursor-pointer font-bold  text-white rounded-lg text-sm"
        >
          Log In
        </span>
      </div>
    </div>
  );
}
