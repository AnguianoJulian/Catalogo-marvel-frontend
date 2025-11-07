import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Obtener todas las películas
  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/movies`);
  }

  // Obtener una película por ID
  getMovie(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movies/${id}`);
  }

  // Agregar película
  addMovie(movie: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/movies`, movie);
  }

  // Actualizar película
  updateMovie(id: number, movie: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/movies/${id}`, movie);
  }

  // Eliminar película
  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/movies/${id}`);
  }
}
