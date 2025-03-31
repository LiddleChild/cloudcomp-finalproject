import { dbclient } from "@/app/libs/clients/db";
import { Register } from "@/app/libs/types/auth";
import { MessageResponse } from "@/app/libs/types/common";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const json = await req.json();
  const data = json.data as Register;

  try {
    await dbclient.query("INSERT INTO users (display_name, email, password) VALUES ($1, $2, $3)", [
      data.displayName,
      data.email,
      data.password,
    ]);

    const resp: MessageResponse = {
      message: "success",
    };

    return NextResponse.json(resp, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
