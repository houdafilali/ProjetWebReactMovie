import React from "react";
import { TeteLibrary } from "../composants/molecules/TeteLibrary";
import { ListeFilm } from "../composants/organismes/ListeFilm";
import { useFetchFilmActuels } from "../services/hooks/useFetchFillmsActuels";

export function Library() {
  const { films = [], isError, isLoading } = useFetchFilmActuels();
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const filmsFiltres = films.filter(
    (film) =>
      film.original_title &&
      film.original_title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6 p-12 min-h-screen dark:bg-gray-800 dark:text-white">
      <TeteLibrary onSearchChange={handleSearchChange} />
      {isLoading ? (
        <div>Chargement en cours...</div>
      ) : (
        <ListeFilm films={searchQuery ? filmsFiltres : films} />
      )}
      {(isError as boolean) && <div>Erreur</div>}
    </div>
  );
}
