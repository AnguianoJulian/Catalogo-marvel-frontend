import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html'
})
export class AddMovieComponent {
  movie = { title: '', year: '', synopsis: '', cover: '' };

  constructor(private movieService: MovieService, private router: Router) {}

  onSubmit() {
    this.movieService.addMovie(this.movie).subscribe({
      next: () => this.router.navigate(['/peliculas']),
      error: err => console.error('Error al agregar:', err)
    });
  }
}
