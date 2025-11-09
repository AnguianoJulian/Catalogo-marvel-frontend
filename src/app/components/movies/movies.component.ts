import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.movieService.getMovies().subscribe({
      next: data => this.movies = data,
      error: err => console.error('Error al cargar películas:', err)
    });
  }
}
