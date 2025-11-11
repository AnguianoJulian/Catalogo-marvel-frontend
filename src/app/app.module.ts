import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Importa tus componentes
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AddMovieComponent,
    MovieDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,   // ✅ Importante para llamadas a la API
    FormsModule,        // ✅ Para formularios template-driven
    ReactiveFormsModule, // ✅ Para formularios reactivos
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'peliculas', component: MoviesComponent },
      { path: 'peliculas/agregar', component: AddMovieComponent },
      { path: 'peliculas/:id', component: MovieDetailComponent },
      { path: '**', redirectTo: '' } // Ruta por defecto
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
