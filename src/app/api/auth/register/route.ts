import { dbclient } from "@/lib/clients/db";
import { Register } from "@/lib/types/auth";
import { MessageResponse } from "@/lib/types/common";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const json = await req.json();
  const data = json.data as Register;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(data.password, salt);

  try {
    await dbclient.query("INSERT INTO users (display_name, email, password) VALUES ($1, $2, $3)", [
      data.displayName,
      data.email,
      hash,
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
