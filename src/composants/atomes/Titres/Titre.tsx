import React from "react";

export const Titre: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <h3
      className={`font-normal text-base leading-7 dark:text-white md:text-3xl md:leading-10`}
    >
      {children}
    </h3>
  );
};
