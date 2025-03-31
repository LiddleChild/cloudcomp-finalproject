"use client";

import { useEffect, useState } from "react";
import { greeting } from "./libs/apis/greeting";
import toast from "react-hot-toast";

export default function Home() {
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    greeting().then((msg) => setMessage(msg));
  }, []);

  const buttonHandler = () => {
    toast.error("Hey, leave me alone");
  };

  return (
    <div>
      <div className="text-xl font-semibold">Hi</div>
      <div>{message}</div>
      <button onClick={buttonHandler} className="bg-green-600 rounded-lg p-2">
        Dont your dare to touch me
      </button>
    </div>
  );
}
