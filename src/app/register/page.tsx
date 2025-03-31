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
import toast from "react-hot-toast";
import { Register } from "@/lib/types/auth";
import { registerSchema } from "@/lib/schemas/register";
import { register } from "@/lib/apis/auth";

export default function RegisterPage() {
  const form = useForm<Register>({
    resolver: zodResolver(registerSchema),
  });

  const submitHandler = async (data: Register) => {
    register(data)
      .then(() => {
        toast.success("Registration success!");
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
          <div className="text-4xl font-semibold">Register</div>
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="displayName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Display Name</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoelnwza" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>
          <Button className="bg-ci-orange hover:bg-ci-orange/85">Register</Button>
        </form>
      </Form>
    </div>
  );
}
