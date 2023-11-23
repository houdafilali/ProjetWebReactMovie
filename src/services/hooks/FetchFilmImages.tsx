import { useQuery } from "react-query";
import { InfosDB } from "../InfosDB";

const fetchFilmImages = async (id: string) => {
  const response = await fetch(`${InfosDB.apiURL}${id}/images`, {
    headers: { Authorization: `Bearer ${InfosDB.apiBearerToken} ` },
  });
  const images = await response.json();
  return images;
};

export const useFetchMovieImages = (id: string) => {
  return useQuery(["movieImages", id], () => fetchFilmImages(id));
};
