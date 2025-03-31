import { z } from "zod";
import { registerSchema } from "../schemas/register";

export type Register = z.infer<typeof registerSchema>;
