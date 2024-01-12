import { useNavigate, useSearchParams } from "react-router-dom";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { fakeAuthProvider } from "@/lib/auth.ts";
import { LoginFormSchema } from "@/lib/schema.ts";
import Brand from "@/components/sidebar/brand.tsx";

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

  async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    await fakeAuthProvider.signin(values.username);
    const to = searchParams.get("from") || "/dashboard";
    return navigate(to, { replace: true });
  }

  return (
    <div className="bg-appBackground min-h-full flex flex-col justify-center gap-5 px-4 py-8 xl:px-8">
      <Brand className="w-auto my-5 text-2xl text-white" />
      <div className="bg-white w-full md:max-w-2xl mx-auto p-10 md:py-20 md:px-32 rounded-2xl space-y-5">
        <p className="text-2xl font-bold text-center">
          Sign in to your account
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
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
                    <Input placeholder="password" type="password" {...field} />
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
  );
};

export default LoginPage;
