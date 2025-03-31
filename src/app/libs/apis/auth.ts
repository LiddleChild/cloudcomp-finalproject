import axios, { AxiosError } from "axios";
import { Register } from "../types/auth";
import { MessageResponse } from "../types/common";

export async function register(data: Register): Promise<MessageResponse> {
  return await axios
    .post("/api/auth/register", {
      data,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((resp) => resp.data)
    .catch((err) => {
      if (err instanceof AxiosError) {
        throw err.response?.data;
      } else {
        throw err;
      }
    });
}
