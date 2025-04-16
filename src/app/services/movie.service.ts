import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly API_URL = environment.apiUrl;
  private readonly API_KEY = environment.apiKey;

  constructor(private http: HttpClient) {}

  getMovies(page: number = 1): Observable<any> {
    return this.http.get<any>(
      `${this.API_URL}/movie/popular?api_key=${this.API_KEY}&page=${page}`
    );
  }

  getMovieDetails(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/movie/${id}?api_key=${this.API_KEY}`);
  }
}
