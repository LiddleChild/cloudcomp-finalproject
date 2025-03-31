import axios from "axios";
import { GreetingResponse } from "../types/greeting";

export async function greeting(): Promise<string> {
  const response = await axios.get("/api/greeting");
  const data = response.data as GreetingResponse;

  return data.message;
}
