import { Suspense, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@/components/providers/theme-provider";

// Create a client
const queryClient = new QueryClient();

export default function Root() {
  // const navigate = useNavigate();
  // const location = useLocation();
  //
  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     navigate("/dashboard");
  //   }
  // }, [navigate, location]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
