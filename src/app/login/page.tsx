"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Login } from "@/lib/types/auth";
import { loginSchema } from "@/lib/schemas/auth";
import { signIn } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [error, setError] = useState<string | undefined>();
  const form = useForm<Login>({
    resolver: zodResolver(loginSchema),
  });

  const submitHandler = async (data: Login) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    })
      .then((resp) => {
        if (resp?.error) {
          setError(resp?.error || undefined);
          return;
        }

        toast.success("Login successful!");
        router.push("/topics");
      })
      .catch((err) => {
        console.error(err);
        toast.error("An error occured");
      });
  };

  return (
    <div className="size-full flex justify-center items-center p-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="bg-white rounded-xl p-8 flex flex-col gap-12 w-full max-w-[450px]"
        >
          <div className="text-4xl font-semibold">Login</div>
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john.d@email.com" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormMessage>{error}</FormMessage>
          </div>
          <Button className="bg-ci-orange hover:bg-ci-orange/85">Login</Button>
        </form>
      </Form>
    </div>
  );
}
