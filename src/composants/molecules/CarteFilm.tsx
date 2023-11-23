import React from "react";
import { Link } from "react-router-dom";
import { Carte } from "../atomes/Cartes/Carte";
import { Image } from "../atomes/Images/Image";

interface CarteFilmProps {
  id: string;
  path: string;
}

export const CarteFilm: React.FC<CarteFilmProps> = ({ id, path }) => {
  return (
    <Link to={"/movie/" + id}>
      <Carte>
        <Image src={"https://image.tmdb.org/t/p/original/" + path} alt="film" />
      </Carte>
    </Link>
  );
};
