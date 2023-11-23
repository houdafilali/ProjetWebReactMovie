import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-1 bg-white text-black">{children}</div>;
};

export default Layout;
