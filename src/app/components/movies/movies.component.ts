import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.http.get<any[]>(`${environment.apiUrl}/movies`).subscribe({
      next: (data) => {
        // Agregamos la URL completa de las imágenes
        this.movies = data.map(movie => ({
          ...movie,
          cover: `${environment.coverUrl}${movie.cover}`
        }));
      },
      error: (err) => {
        console.error('Error al cargar películas:', err);
      }
    });
  }
}
