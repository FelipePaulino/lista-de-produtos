import { CountProducts, Logo } from "@/shared/components/internal";

export const Header = () => (
  <header className="flex items-center justify-between container mx-auto px-4 py-10 sticky top-0 bg-white z-10 shadow-md flex-wrap">
    <Logo />

    <CountProducts />
  </header>
);
