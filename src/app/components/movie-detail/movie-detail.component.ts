import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id)) {
      console.error('El parámetro id no es válido');
      this.router.navigate(['/peliculas']);
      return;
    }

    this.movieService.getMovie(id).subscribe({
    next: (data: any) => this.movie = data,
    error: (err: any) => console.error(err)
});

  }

  deleteMovie() {
    if (confirm('¿Seguro que deseas eliminar esta película?')) {
      this.movieService.deleteMovie(this.movie.id).subscribe({
        next: () => {
          alert('Película eliminada correctamente');
          this.router.navigate(['/peliculas']);
        },
        error: err => console.error('Error al eliminar:', err)
      });
    }
  }
}
