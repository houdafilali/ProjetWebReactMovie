import { ReactNode } from "react";
interface FilmCreditsProps {
  children: ReactNode;
}
export const ActeurName = ({ children }: FilmCreditsProps) => (
  <p className="text-white text-xs leading-4 m-0">{children}</p>
);
