interface GenreFilmProps {
  genres: { name: string }[];
}

export const GenreFilm = ({ genres }: GenreFilmProps) => {
  return (
    <p className="text-white text-base font-normal italic">
      {genres ? genres.map((genre) => genre.name).join(", ") : "N/A"}
    </p>
  );
};
