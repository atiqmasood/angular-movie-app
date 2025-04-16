import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadMovies } from '../store/movies/movies.actions';
import {
  selectMovies,
  selectTotalResults,
  selectLoading,
  selectError,
} from '../store/movies/movies.selectors';
import { Movie } from '../models/movie.model';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterModule, NgFor, MatPaginatorModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>;
  totalResults$: Observable<number>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  pageSize: number = 20;
  currentPage: number = 1;

  constructor(private store: Store<AppState>) {
    // Initialize the observables for movies and total results
    this.movies$ = this.store.select(selectMovies);
    this.totalResults$ = this.store.select(selectTotalResults);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.store.dispatch(loadMovies({ page: this.currentPage }));
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.fetchMovies();
  }

  retry(): void {
    this.fetchMovies();
  }
}
