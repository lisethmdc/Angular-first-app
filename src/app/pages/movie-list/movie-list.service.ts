import { DetailInterface } from './../../models/detail.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//

import { MovieInterface } from 'src/app/models/movie.model';

/*const baseUrl = 'https://ghibliapi.herokuapp.com/films'*/

@Injectable()

export class MovieListService {
  private baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'https://ghibliapi.herokuapp.com/films';
  }

  getMovies(): Observable<MovieInterface[]> {
    return this.http.get<MovieInterface[]> (`${this.baseUrl}`)
  }

  getMovieDetail(url:string): Observable<DetailInterface> {
    return this.http.get<DetailInterface> (url)
  }

}
