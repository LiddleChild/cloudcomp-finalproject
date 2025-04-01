"use client";

import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  return (
    <div>
      <div className="text-xl font-semibold">
        {!!session.data ? `Hi, I'm ${session.data.user.display_name}` : "Hi"}
      </div>
      <div className="flex gap-4">
        {!!session.data ? (
          <button onClick={() => signOut()} className="bg-white p-2">
            Logout
          </button>
        ) : (
          <>
            <a href="/login" className="bg-white p-2">
              Login
            </a>
            <a href="/register" className="bg-white p-2">
              Register
            </a>
          </>
        )}
      </div>
    </div>
  );
}
