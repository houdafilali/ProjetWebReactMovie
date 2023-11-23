import { TitreFilm } from "../atomes/Titres/TitreFilm";
import { OverviewFilm } from "../atomes/OverviewFilm";
import { GenreFilm } from "../atomes/GenreFilm";
import { DateFilm } from "../atomes/DateFilm";

export const ConteneurInfoFilm = ({ film }: any) => {
  return (
    <div className="flex-1">
      <TitreFilm titre={film.title} />
      <OverviewFilm overview={film.overview} />
      <GenreFilm genres={film.genres} />
      <DateFilm releaseDate={film.release_date} />
    </div>
  );
};
