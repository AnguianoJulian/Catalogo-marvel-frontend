import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(this.id).subscribe({
      next: data => this.movie = data,
      error: err => console.error('Error al obtener película:', err)
    });
  }

  deleteMovie(): void {
    if (!confirm('¿Seguro que quieres eliminar esta película?')) return;
    this.movieService.deleteMovie(this.id).subscribe({
      next: () => this.router.navigate(['/peliculas']),
      error: err => console.error('Error al eliminar:', err)
    });
  }
}
