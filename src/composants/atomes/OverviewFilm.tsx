interface OverviewFilmProps {
  overview: string;
}

export const OverviewFilm = ({ overview }: OverviewFilmProps) => {
  return <p className="text-white text-base font-normal">{overview}</p>;
};
