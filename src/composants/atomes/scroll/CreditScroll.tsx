import { ReactNode } from "react";
interface FilmCreditsProps {
  children: ReactNode;
}

export const CreditScroll = ({ children }: FilmCreditsProps) => (
  <div className="flex flex-row scrollbar-thin gap-6 pt-2 overflow-x-scroll">
    {children}
  </div>
);
