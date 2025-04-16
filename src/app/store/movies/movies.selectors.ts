import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesState } from './movies.state';

export const selectMoviesState = createFeatureSelector<MoviesState>('movies');

export const selectMovies = createSelector(
  selectMoviesState,
  (state) => state.movies
);
export const selectTotalResults = createSelector(
  selectMoviesState,
  (state) => state.totalResults
);
export const selectLoading = createSelector(
  selectMoviesState,
  (state) => state.loading
);
export const selectError = createSelector(
  selectMoviesState,
  (state) => state.error
);
export const selectSelectedMovie = createSelector(
  selectMoviesState,
  (state) => state.selectedMovie
);
