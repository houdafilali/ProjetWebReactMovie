import { useQuery } from "react-query";
import axios from "axios";
import { InfosDB } from "../services/InfosDB";
import { PTFilm } from "../services/PointDeTerminaison";
import { Film } from "../interfaces/Film";
export const useFetchFilmActuels = () => {
  const apiKey = InfosDB.key;

  const { data, error, isLoading } = useQuery("films", async () => {
    const response = await axios.get(PTFilm, {
      params: {
        api_key: apiKey,
      },
    });

    return response.data.results as Film[];
  });

  return {
    films: data,
    isError: error,
    isLoading,
  };
};
