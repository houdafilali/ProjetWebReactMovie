import { useState, ChangeEvent } from "react";

interface RechercheProps {
  onRecherche: (requete: string) => void;
}

export const Recherche = ({ onRecherche }: RechercheProps) => {
  const [valeurRecherche, setValeurRecherche] = useState<string>("");

  const gererChangement = (evenement: ChangeEvent<HTMLInputElement>) => {
    const requete = evenement.target.value;
    setValeurRecherche(requete);
    onRecherche(requete);
  };

  return (
    <input
      type="text"
      placeholder="🔎  Search for movie"
      className="pl-4 rounded-full min-w-full sm:min-w-[20rem] dark:bg-gray-700"
      value={valeurRecherche}
      onChange={gererChangement}
    />
  );
};
