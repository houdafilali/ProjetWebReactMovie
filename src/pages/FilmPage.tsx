import { FilmDetail } from "../composants/organismes/FilmDetail";
import { FilmCredits } from "../composants/organismes/FilmCredits";
import { FilmImage } from "../composants/organismes/FilmImage";
import { useFetchFilmById } from "../services/hooks/FetchFilmById";
import { useParams } from "react-router-dom";

export function FilmPage() {
  const { id } = useParams<{ id: string }>();
  const {
    data: film,
    isLoading,
    isError,
  } = useFetchFilmById(id as unknown as string);

  const backgroundImageUrl = film
    ? `http://image.tmdb.org/t/p/original/${film.poster_path}`
    : "";

  return (
    <>
      {isLoading ? (
        <div>Chargement en cours...</div>
      ) : (
        <div className="p-12 overflow-hidden gap-4 light relative">
          <div className="relative z-10">
            <FilmDetail />
            <FilmCredits />
            <FilmImage />
          </div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed filter blur-md"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              zIndex: -1,
            }}
          ></div>
        </div>
      )}
      {isError && <div>Error</div>}
    </>
  );
}
