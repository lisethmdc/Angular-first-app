import { Component, OnInit } from '@angular/core';
// import { MovieDetail } from 'src/app/models/detail.model';
import { MovieListService } from '../movie-list.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  // public movieDetail: MovieDetail[];

  constructor(private movieListService: MovieListService) { }

  ngOnInit(): void {
    // this.getMovieDetail()
  }

  /* getMovieDetail(): void{
    this.movieListService.getMovieDetail().subscribe((res: MovieDetail[])=> {
      this.movieDetail = res;
      //this.movieList = res;
    })
  } */

/*
  public viewDetail(item: MovieDetail): void {    
    this.getMovieDetail(item.url)
  }  */

}
