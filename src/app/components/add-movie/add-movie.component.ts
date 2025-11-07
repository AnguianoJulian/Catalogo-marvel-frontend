import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html'
})
export class AddMovieComponent {
  movie = {
    title: '',
    year: '',
    synopsis: '',
    cover: ''
  };

  selectedFile: File | null = null;

  constructor(private movieService: MovieService, private router: Router) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.movie.title);
    formData.append('year', this.movie.year);
    formData.append('synopsis', this.movie.synopsis);

    if (this.selectedFile) {
      formData.append('cover', this.selectedFile);
    }

    this.movieService.addMovie(formData).subscribe({
      next: () => {
        alert('Película agregada correctamente');
        this.router.navigate(['/peliculas']);
      },
      error: (err: any) => {
        console.error('Error al agregar película:', err);
      }
    });
  }
}
