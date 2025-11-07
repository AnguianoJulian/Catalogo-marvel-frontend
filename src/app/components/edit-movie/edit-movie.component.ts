import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.cargarPeliculas();
  }

  cargarPeliculas(): void {
    this.movieService.getMovies().subscribe({
      next: (data: any[]) => {
        this.movies = data;
      },
      error: (err: any) => {
        console.error('Error al cargar películas:', err);
      }
    });
  }
}
