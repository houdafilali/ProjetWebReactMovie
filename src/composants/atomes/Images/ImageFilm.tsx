interface ImageFilmProps {
  posterPath: string;
  title: string;
}

export const ImageFilm = ({ posterPath, title }: ImageFilmProps) => (
  <img
    src={`http://image.tmdb.org/t/p/original/${posterPath}`}
    alt={title}
    className="rounded-md object-cover h-auto w-full md:w-72"
  />
);
