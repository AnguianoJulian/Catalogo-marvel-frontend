import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  peliculas: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.cargarPeliculas();
  }

  cargarPeliculas(): void {
    this.movieService.getMovies().subscribe({
      next: (data: any[]) => {
        this.peliculas = data;
      },
      error: (error: any) => {
        console.error('Error al cargar películas:', error);
      }
    });
  }
}
