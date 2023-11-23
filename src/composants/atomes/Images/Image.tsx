interface ImageProps {
  src: string;
  alt: string;
}

export const Image = ({ src, alt }: ImageProps) => (
  <img
    className="rounded-md object-cover w-full h-auto block align-middle"
    src={src}
    alt={alt}
  />
);
