import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { moviesReducer } from './store/movies/movies.reducer';
import { MoviesEffects } from './store/movies/movies.effects';
import { initialMoviesState } from './store/movies/movies.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(
      {
        movies: moviesReducer,
      },
      {
        initialState: {
          movies: initialMoviesState,
        },
      }
    ),
    provideEffects([MoviesEffects]),
    provideHttpClient(),
  ],
};
