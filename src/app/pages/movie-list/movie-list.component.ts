import { Component, OnInit } from '@angular/core';
import { MovieInterface } from 'src/app/models/movie.model';
import { DetailInterface } from './../../models/detail.model';
import { MovieListService } from './movie-list.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public movieList: MovieInterface[];
  public movie: DetailInterface;

  constructor(private movieListService: MovieListService) { }

  ngOnInit(): void {
    this.getMovieList();
    
  }

  getMovieList(): void {
    this.movieListService.getMovies().subscribe((res: MovieInterface[])=> {
      this.movieList = res;
      console.log(res)
    })
  }
/* 
   getMovieDetail(): void {
    this.movieListService.getDetail().subscribe((res: any) => {
      //item.url = res.url;
      this.movie = res
      console.log(res)
    });
  }  */

/*
   public viewDetail(item: MovieInterface): void {
    this.getMovieDetail(item, item.url);
    console.log(this.viewDetail)
  }  */


  

}
