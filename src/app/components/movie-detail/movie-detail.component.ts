import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
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
    this.obtenerPelicula();
  }

  obtenerPelicula(): void {
    this.movieService.getMovie(this.id).subscribe({
      next: (data: any) => {
        this.movie = data;
      },
      error: (error: any) => {
        console.error('Error al obtener película:', error);
      }
    });
  }

deleteMovie(): void {
  if (confirm('¿Seguro que quieres eliminar esta película?')) {
    this.movieService.deleteMovie(this.id).subscribe({
      next: () => {
        alert('Película eliminada con éxito');
        this.router.navigate(['/peliculas']);
      },
      error: (err: any) => {
        console.error('Error al eliminar la película:', err);
      }
    });
  }
}

}
