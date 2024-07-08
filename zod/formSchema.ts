// /zod/formSchema.ts
import { z } from "zod";

export const SignupFormSchema = z.object({
  username: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
  role: z.string(),
});

export const SigninFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const ServiceSchema = z.object({
  title: z.string().min(5, { message: "title is required" }),
  description: z.string().min(5, { message: "Description is required" }),
  price: z.string().min(2, { message: "Price is required" }),
});
