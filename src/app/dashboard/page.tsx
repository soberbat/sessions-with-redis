"use client";

import React from "react";
import Auth from "./auth";
import { redirect } from "next/navigation";
import { stringify } from "querystring";
import { useRouter } from "next/navigation";
import LogOut from "@/utils/logOut";

export default function Dashboard() {
  const router = useRouter();
  const logoutAndRedirect = async () => {
    await LogOut();
    router.push("/");
  };
  return (
    <div className="bg-blue-50 font-bold font flex-col text-2xl text-blue-500 w-screen h-screen flex items-center justify-center ">
      <span>DASHBOARD</span>
      <span
        onClick={logoutAndRedirect}
        className="bg-blue-400 p-2 fixed top-2 cursor-pointer left-2 text-white rounded-lg text-sm"
      >
        Log Out
      </span>
    </div>
  );
}
