import { DetailInterface } from './../../models/detail.model';
import { Component, OnInit } from '@angular/core';
import { MovieInterface } from 'src/app/models/movie.model';
import { MovieListService } from './movie-list.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public movieList: MovieInterface[];
  public movieDetail: DetailInterface;

  constructor(private movieListService: MovieListService) { }

  ngOnInit(): void {
    this.getMovieList()
  }

  getMovieList(): void {
    this.movieListService.getMovies().subscribe((res: MovieInterface[])=> {
      this.movieList = res;
    })
  }

  getMovieDetail(url: string): void{
    this.movieListService.getMovieDetail(url).subscribe((res: DetailInterface)=> {
      console.log(res)
      this.movieDetail = res;
    })
  }

  public viewDetail(item: MovieInterface): void {
    this.getMovieDetail(item.url)
  } 
 

}
