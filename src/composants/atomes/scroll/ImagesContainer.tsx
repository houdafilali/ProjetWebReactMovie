export const ImagesScroll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="flex overflow-x-scroll gap-8 lg:gap-12 pt-2">{children}</div>
);
