import React from "react";

export const Grid: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => (
  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {children}
  </div>
);
