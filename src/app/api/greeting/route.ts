import { GreetingResponse } from "@/app/libs/types/greeting";

export async function GET() {
  const resp: GreetingResponse = {
    message: "This is working",
  };

  return Response.json(resp);
}
