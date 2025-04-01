import { z } from "zod";
import { loginSchema, registerSchema } from "../schemas/auth";

export type Register = z.infer<typeof registerSchema>;
export type Login = z.infer<typeof loginSchema>;
