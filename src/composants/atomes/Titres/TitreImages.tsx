export const Title: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <p className="text-white text-xl lg:text-2xl leading-7 lg:leading-8 mb-0">
    {children}
  </p>
);
