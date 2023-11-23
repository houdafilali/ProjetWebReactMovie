import { useQuery } from "react-query";
import { InfosDB } from "../InfosDB";

const fetchFilmCredits = async (id: string) => {
  const response = await fetch(`${InfosDB.apiURL}${id}/credits`, {
    headers: { Authorization: `Bearer ${InfosDB.apiBearerToken} ` },
  });
  const credits = await response.json();
  return credits;
};

export const useFetchFilmCredits = (id: string) => {
  return useQuery(["movieCredits", id], () => fetchFilmCredits(id));
};
