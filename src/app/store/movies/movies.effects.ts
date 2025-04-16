import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MovieService } from '../../services/movie.service';
import * as MovieActions from './movies.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';

@Injectable()
export class MoviesEffects {
  private actions$ = inject(Actions);
  private movieService = inject(MovieService);
  // Fetch Movies
  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieActions.loadMovies),
      mergeMap(({ page }) =>
        this.movieService.getMovies(page).pipe(
          map((data) => {
            return MovieActions.loadMoviesSuccess({
              movies: data.results,
              totalResults: data.total_results,
            });
          }),
          catchError((error) => {
            return of(MovieActions.loadMoviesFailure({ error: error.message }));
          })
        )
      )
    );
  });

  // Fetch Movie Details
  loadMovieDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieActions.loadMovieDetail),
      mergeMap(({ id }) =>
        this.movieService.getMovieDetails(id).pipe(
          map((movie) => MovieActions.loadMovieDetailSuccess({ movie })),
          catchError((error) =>
            of(MovieActions.loadMovieDetailFailure({ error: error.message }))
          )
        )
      )
    );
  });
}
