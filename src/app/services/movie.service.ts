import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = `${environment.apiUrl}/movies`;

  constructor(private http: HttpClient) {}

  // Obtener todas las películas
  getMovies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Obtener una película por ID
  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Agregar película
  addMovie(movie: any): Observable<any> {
    return this.http.post(this.apiUrl, movie);
  }

  // Actualizar película
  updateMovie(id: number, movie: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, movie);
  }

  // Eliminar película
  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
