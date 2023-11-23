import { useQuery } from "react-query";
import { InfosDB } from "../InfosDB";

const fetchFilmById = async (id: string) => {
  const response = await fetch(`${InfosDB.apiURL}${id}`, {
    headers: { Authorization: `Bearer ${InfosDB.apiBearerToken} ` },
  });
  const movie = await response.json();
  return movie;
};

export const useFetchFilmById = (id: string) => {
  return useQuery(["movie", id], () => fetchFilmById(id));
};
