interface DateFilmProps {
  releaseDate: string;
}

export const DateFilm = ({ releaseDate }: DateFilmProps) => (
  <p className="text-white text-base font-normal italic">{releaseDate}</p>
);
