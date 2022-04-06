import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { MovieListService } from './movie-list.service';
import { MovieDetailService } from './movie-detail/movie-detail.service';


@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MovieListRoutingModule
  ],
  providers: [
    MovieListService,
    MovieDetailService
  ]
})
export class MovieListModule { }
