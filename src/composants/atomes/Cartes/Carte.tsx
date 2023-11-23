import React from "react";

export const Carte: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => (
  <div className="w-64 h-auto shadow-lg transition rounded-md hover:scale-105 hover:cursor-pointer hover:shadow-2xl">
    {children}
  </div>
);
