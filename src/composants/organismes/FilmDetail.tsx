import { BackButton } from "../atomes/Buttons/BackButton";
import { ImageFilm } from "../atomes/Images/ImageFilm";
import { ConteneurInfoFilm } from "../molecules/ConteneurInfoFilm";
import { useParams } from "react-router-dom";
import { useFetchFilmById } from "../../services/hooks/FetchFilmById";

export function FilmDetail() {
  const { id } = useParams<{ id: string }>();
  const {
    data: film,
    isLoading,
    isError,
  } = useFetchFilmById(id as unknown as string);

  return (
    <>
      <BackButton />

      <div>
        {isLoading ? (
          <div className="text-white">Chargement en cours...</div>
        ) : (
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 justify-center">
            <ImageFilm posterPath={film.poster_path} title={film.title} />
            <ConteneurInfoFilm film={film} />
          </div>
        )}
        {isError && <div className="text-white">Error</div>}
      </div>
    </>
  );
}
