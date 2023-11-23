import { ReactNode } from "react";
interface CreditsProps {
  children: ReactNode;
}

export const Credit = ({ children }: CreditsProps) => (
  <p className="text-white text-3xl m-0">{children}</p>
);
