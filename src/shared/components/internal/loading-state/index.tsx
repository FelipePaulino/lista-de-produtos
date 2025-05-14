import { Loader2 } from "lucide-react";

export const LoadingState = () => (
  <div className="flex items-center justify-center h-screen w-full fixed backdrop-blur-2xl top-0 left-0 right-0 bottom-0 z-50">
    <Loader2 className="w-10 h-10 animate-spin" />
  </div>
);
