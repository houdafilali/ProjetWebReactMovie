import { Titre } from "../atomes/Titres/Titre";
import { Recherche } from "./Recherche";

interface TeteLibraryProps {
  onSearchChange: (query: string) => void;
}
export function TeteLibrary({ onSearchChange }: TeteLibraryProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:justify-between">
      <Titre>🎬🍿 Movie library</Titre>
      <Recherche onRecherche={onSearchChange} />
    </div>
  );
}
