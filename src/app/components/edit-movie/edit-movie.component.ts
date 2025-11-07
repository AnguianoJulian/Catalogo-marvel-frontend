import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html'
})
export class EditMovieComponent implements OnInit {
  movie: any = {};
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.movieService.getMovie(this.id).subscribe((data: any) => this.movie = data);
  }

  updateMovie() {
    this.movieService.updateMovie(this.id, this.movie).subscribe(() => {
      alert('Película actualizada correctamente');
      this.router.navigate(['/peliculas']);
    });
  }
}
