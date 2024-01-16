import { Loader2 } from "lucide-react";

const SuspenseFallback = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader2 className="animate-spin text-muted-foreground w-10 h-10" />
    </div>
  );
};

export default SuspenseFallback;
