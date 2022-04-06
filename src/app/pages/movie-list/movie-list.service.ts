import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailInterface } from 'src/app/models/detail.model';

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



/*   getDetail(): Observable<DetailInterface> {
    return this.http.get<DetailInterface>(`${this.baseUrl}/ebbb6b7c-945c-41ee-a792-de0e43191bd8`);
  }
 */
}
