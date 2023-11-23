import { ReactNode } from "react";
interface ActeurCarteProps {
  children: ReactNode;
}
export const ActeurCarte = ({ children }: ActeurCarteProps) => (
  <div className="min-w-max">{children}</div>
);
