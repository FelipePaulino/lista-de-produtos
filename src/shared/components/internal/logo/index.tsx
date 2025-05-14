import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { cn } from "@/shared/lib";

import { LogoProps } from "./types";

export const Logo = ({ isLight = false }: LogoProps) => (
  <Link href="/" className="flex items-center gap-2">
    <span className={cn("text-xl font-bold", isLight && "text-white")}>
      Compre
    </span>

    <ShoppingCart className="text-green-500" />

    <span className={cn("text-xl font-bold", isLight && "text-white")}>
      agora!
    </span>
  </Link>
);
