import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  loading = true;
  error = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    console.log('Componente Movies cargado');

    this.movieService.getMovies().subscribe({
      next: (data) => {
        console.log('Películas recibidas:', data);
        this.movies = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener películas:', err);
        this.error = 'No se pudieron cargar las películas.';
        this.loading = false;
      }
    });
  }
}
