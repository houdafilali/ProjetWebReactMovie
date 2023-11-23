import { ReactNode } from "react";
interface FilmCreditsProps {
  children: ReactNode;
}
export const ActeurRole = ({ children }: FilmCreditsProps) => (
  <p className="text-stone-300 text-xs leading-4 m-0">{children}</p>
);
