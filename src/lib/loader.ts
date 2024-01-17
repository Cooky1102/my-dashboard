import { LoaderFunctionArgs, redirect } from "react-router-dom";

import { fakeAuthProvider } from "@/lib/auth.ts";

export function rootLoader({ request }: LoaderFunctionArgs) {
  // if (
  //   !fakeAuthProvider.isAuthenticated &&
  //   new URL(request.url).pathname !== "/auth/login"
  // ) {
  //   return redirect("/auth/login");
  // }
  //
  // console.log(new URL(request.url).pathname);
  if (new URL(request.url).pathname === "/") {
    return redirect("/dashboard");
  }
  return null;
}

export function loginLoader() {
  // If the user is already logged in, redirect them to the homepage
  if (fakeAuthProvider.isAuthenticated) {
    return redirect("/dashboard");
  }
  return null;
}

export function dashboardLoader({ request }: LoaderFunctionArgs) {
  if (!fakeAuthProvider.checkAuth()) {
    const params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }
  return null;
}
