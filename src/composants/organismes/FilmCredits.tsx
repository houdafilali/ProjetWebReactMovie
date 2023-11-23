import { useParams } from "react-router-dom";
import { useFetchFilmCredits } from "../../services/FetchFilmCredits";
import { Credit } from "../atomes/Titres/Credit";
import { CreditScroll } from "../atomes/scroll/CreditScroll";
import { ActeurCarte } from "../atomes/Cartes/ActeurCarte";
import { ActeurImage } from "../atomes/Images/ActeurImage";
import { ActeurName } from "../atomes/ActeurName";
import { ActeurRole } from "../atomes/ActeurRole";

export function FilmCredits() {
  const { id } = useParams<{ id: string }>();
  const {
    data: credits,
    isLoading,
    isError,
  } = useFetchFilmCredits(id as unknown as string);

  return (
    <div>
      <Credit>Credits</Credit>
      {isLoading ? (
        <div>Chargement en cours...</div>
      ) : (
        <CreditScroll>
          {credits?.cast.map((actor: any) => (
            <ActeurCarte key={actor.id}>
              <ActeurImage
                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                alt={actor.name}
              />
              <ActeurName>{actor.name}</ActeurName>
              <ActeurRole>{actor.character}</ActeurRole>
            </ActeurCarte>
          ))}
        </CreditScroll>
      )}
      {isError && (
        <div>Une erreur s'est produite lors du chargement des crédits.</div>
      )}
    </div>
  );
}
