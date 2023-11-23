interface TitreFilmProps {
  titre: string;
}
export const TitreFilm = ({ titre }: TitreFilmProps) => (
  <p className="text-white text-3xl font-normal leading-10">{titre}</p>
);
