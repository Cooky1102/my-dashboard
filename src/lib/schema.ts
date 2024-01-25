import { z } from "zod";

export const LoginFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export const BasicDetailsFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "first name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "last name must be at least 6 characters.",
  }),
  bio: z.string(),
  country: z.string(),
  state: z.string(),
  city: z.string(),
  zipCode: z.string(),
  address: z.string(),
});
