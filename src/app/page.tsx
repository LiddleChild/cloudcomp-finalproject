"use client";

import toast from "react-hot-toast";

export default function Home() {
  const buttonHandler = () => {
    toast.error("Hey, leave me alone");
  };

  return (
    <div>
      <div className="text-xl font-semibold">Hi</div>
      <button onClick={buttonHandler} className="bg-green-600 rounded-lg p-2">
        Dont your dare to touch me
      </button>
    </div>
  );
}
