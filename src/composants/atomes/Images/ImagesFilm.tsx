export const Image: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl rounded-md"
  />
);
