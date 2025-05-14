import { Logo } from "@/shared/components/internal";

export const Footer = () => (
  <footer className="flex items-center justify-between bg-slate-950  fixed bottom-0 left-0 right-0">
    <div className="flex items-center justify-center gap-4 w-full py-6">
      <h1 className="text-white">Todos os direitos reservados</h1>

      <span>|</span>

      <Logo isLight />
    </div>
  </footer>
);
