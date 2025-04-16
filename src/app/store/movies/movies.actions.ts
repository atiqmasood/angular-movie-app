import { createAction, props } from '@ngrx/store';
import { Movie } from '../../models/movie.model';

// Fetch Movies
export const loadMovies = createAction(
  '[Movies] Load Movies',
  props<{ page: number }>()
);
export const loadMoviesSuccess = createAction(
  '[Movies] Load Movies Success',
  props<{ movies: Movie[]; totalResults: number }>()
);
export const loadMoviesFailure = createAction(
  '[Movies] Load Movies Failure',
  props<{ error: string }>()
);

// Fetch Movie Details
export const loadMovieDetail = createAction(
  '[Movies] Load Movie Detail',
  props<{ id: number }>()
);
export const loadMovieDetailSuccess = createAction(
  '[Movies] Load Movie Detail Success',
  props<{ movie: Movie }>()
);
export const loadMovieDetailFailure = createAction(
  '[Movies] Load Movie Detail Failure',
  props<{ error: string }>()
);
