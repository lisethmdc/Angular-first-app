import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailInterface } from 'src/app/models/detail.model';
import { MovieDetailService } from './movie-detail.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})

export class MovieDetailComponent implements OnInit {
    public movieId: string = '';
    public movie?: DetailInterface;
    
  constructor(private route: ActivatedRoute,
              private movieDetailService: MovieDetailService) { }

  ngOnInit(): void {
    this.recoverMovieId();
  }
 
    private getDetail(id: string): void {
      this.movieDetailService.getMovieDetail(id).subscribe((res: any) => {
        this.movie = res;
      })
    }

    recoverMovieId(): void{
      this.route.params.subscribe((params) => {
        this.movieId = params['id']
        this.getDetail(this.movieId)  
      })}

}
