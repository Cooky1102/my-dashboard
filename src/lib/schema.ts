import { z } from "zod";

export const LoginFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export const UploadAvatarSchema = z.object({
  avatar: z.instanceof(File).refine(
    (file) => {
      return file.size < 2 * 1024 * 1024;
    },
    { message: "File size must be less than 2MB." },
  ),
});
