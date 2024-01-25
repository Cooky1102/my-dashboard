import { useNavigate, useSearchParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { fakeAuthProvider } from "@/lib/auth.ts";
import { LoginFormSchema } from "@/lib/schema.ts";
import Brand from "@/components/sidebar/brand.tsx";
import Header from "@/components/header.tsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(formData: z.infer<typeof LoginFormSchema>) {
    await fakeAuthProvider.signin(formData.username);
    const to = searchParams.get("from") || "/dashboard";
    return navigate(to, { replace: true });
  }

  return (
    <div className="bg-app min-h-full">
      <Header key="login" />
      <div className="h-full flex flex-col justify-center gap-10 px-4 py-20 xl:px-8">
        <Brand className="w-auto text-2xl text-app-foreground" />
        <div className="bg-main w-full md:max-w-2xl mx-auto p-10 md:py-20 md:px-32 rounded-2xl space-y-5">
          <p className="text-2xl font-bold text-center">
            Sign in to your account
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Password</FormLabel>
                      <Button variant="text" size="sm" className="h-auto">
                        Forget password?
                      </Button>
                    </div>
                    <FormControl>
                      <Input
                        placeholder="password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="active"
                className="w-full font-semibold"
              >
                Sign in
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
