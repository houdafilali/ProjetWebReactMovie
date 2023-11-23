interface ActeurImageProps {
  src: string;
  alt: string;
}

export const ActeurImage = ({ src, alt }: ActeurImageProps) => (
  <img className="rounded-md max-w-full h-72 " src={src} alt={alt} />
);
