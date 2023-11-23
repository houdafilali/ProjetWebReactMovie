import { useParams } from "react-router-dom";
import { useFetchMovieImages } from "../../services/FetchFilmImages";
import { ImagesScroll } from "../atomes/scroll/ImagesContainer";
import { Image } from "../atomes/Images/ImagesFilm";
import { Title } from "../atomes/Titres/TitreImages";

export function FilmImage() {
  const { id } = useParams<{ id: string }>();
  const {
    data: images,
    isLoading,
    isError,
  } = useFetchMovieImages(id as unknown as string);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const filteredImages = images?.backdrops.filter(
    (image: { iso_639_1: string | null }) => image.iso_639_1 == null
  );

  return (
    <div>
      <Title>Images</Title>
      <ImagesScroll>
        {filteredImages?.map((image: any, index: number) => (
          <Image
            key={`${image.id}_${index}`}
            src={`http://image.tmdb.org/t/p/original/${image.file_path}`}
            alt="movie image"
          />
        ))}
      </ImagesScroll>
      {isError && <div>Error</div>}
    </div>
  );
}
