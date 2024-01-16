import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { Suspense } from "react";
import SuspenseFallback from "@/components/skeleton/suspense-fallback.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { Toaster } from "@/components/ui/toaster.tsx";

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
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider delayDuration={300}>
          <Suspense fallback={<SuspenseFallback />}>
            <Outlet />
          </Suspense>
        </TooltipProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
