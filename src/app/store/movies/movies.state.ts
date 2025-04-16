import { Movie } from '../../models/movie.model';

export interface MoviesState {
  movies: Movie[];
  selectedMovie: Movie | null;
  totalResults: number;
  loading: boolean;
  error: string | null;
}

export const initialMoviesState: MoviesState = {
  movies: [],
  selectedMovie: null,
  totalResults: 0,
  loading: false,
  error: null,
};
