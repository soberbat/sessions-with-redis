"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, MouseEvent, Dispatch, FormEvent } from "react";
import SignUp from "@/utils/signUp";
import Login from "@/utils/login";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const inputFields = [
    { label: "Username", stateSetter: setUsername },
    { label: "Password", stateSetter: setPassword },
  ];

  const onLogin = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const response = await Login(username, password);
    const { isSuccesfull, message } = response.data;

    if (isSuccesfull) {
      router.push("/dashboard");
    } else {
      setMessage(message);
    }
  };

  const onInputChange = (
    e: FormEvent<HTMLInputElement>,
    stateSetter: Dispatch<React.SetStateAction<string>>
  ) => {
    stateSetter(e.currentTarget.value);
  };

  return (
    <div className="bg-gray-200 text-black w-screen h-screen flex-col flex items-center justify-center">
      <h1 className="text-5xl font-bold text-gray-600">Log In</h1>

      <form className="flex mt-10 w-1/4 flex-col gap-6">
        {inputFields.map(({ label, stateSetter }) => (
          <div key={label} className=" ">
            <span className="block  text-gray-500 mb-0">{label}</span>
            <input
              onInput={(e) => onInputChange(e, stateSetter)}
              className=" h-8 p-2  w-full rounded-sm"
            />
          </div>
        ))}

        <div className="flex items-center gap-2 justify-center">
          <input
            className="bg-white rounded-sm h-9  w-1/3  "
            type="submit"
            onClick={onLogin}
          />
        </div>
        {message}
      </form>
    </div>
  );
}
