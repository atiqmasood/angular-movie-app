import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './movies.actions';
import { initialMoviesState } from './movies.state';

export const moviesReducer = createReducer(
  initialMoviesState,

  // Load Movies
  on(MovieActions.loadMovies, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(MovieActions.loadMoviesSuccess, (state, { movies, totalResults }) => ({
    ...state,
    movies,
    totalResults,
    loading: false,
  })),
  on(MovieActions.loadMoviesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Load Movie Detail
  on(MovieActions.loadMovieDetail, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(MovieActions.loadMovieDetailSuccess, (state, { movie }) => ({
    ...state,
    selectedMovie: movie,
    loading: false,
  })),
  on(MovieActions.loadMovieDetailFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
