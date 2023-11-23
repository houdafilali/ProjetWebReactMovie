export interface InfoFilmProps {
  film: {
    filmtitre: string;
    overview: string;
    genres: { name: string }[];
    release_date: string;
  };
}
