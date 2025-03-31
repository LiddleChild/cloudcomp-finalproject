import { z } from "zod";

export const registerSchema = z
  .object({
    displayName: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });
