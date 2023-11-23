import { Grid } from "../miseEnpage/Grid";
import { CarteFilm } from "../molecules/CarteFilm";
import { Film } from "../../interfaces/Film";

interface ListeFilmProps {
  films: Film[];
}

export const ListeFilm = ({ films }: ListeFilmProps) => {
  return (
    <Grid>
      {films.map((film) => (
        <CarteFilm key={film.id} id={film.id} path={film.poster_path} />
      ))}
    </Grid>
  );
};
