import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe({
      next: (data) => {
        console.log('Películas desde API:', data);
        this.movies = data.map(movie => ({
          ...movie,
          cover: `${environment.coverUrl}${movie.cover}`
        }));
        console.log('Películas procesadas:', this.movies);
      },
      error: (err) => {
        console.error('Error al cargar películas:', err);
      }
    });
  }
}
