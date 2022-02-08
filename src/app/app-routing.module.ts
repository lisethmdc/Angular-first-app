import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full' 
  },
  { 
    path: 'home', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'catalog', 
    loadChildren: () => import('./pages/movie-list/movie-list.module').then(m => m.MovieListModule)
  },
  { 
    path: 'reviews', 
    loadChildren: () => import('./pages/reviews/reviews.module').then(m => m.ReviewsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
