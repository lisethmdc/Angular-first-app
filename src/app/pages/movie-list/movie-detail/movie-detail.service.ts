import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieDetailService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://ghibliapi.herokuapp.com/films'
   }

   getMovieDetail(id: string) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
