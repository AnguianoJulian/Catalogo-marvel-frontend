import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'peliculas', component: MoviesComponent },
  { path: 'peliculas/:id', component: MovieDetailComponent },
  { path: 'agregar', component: AddMovieComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
