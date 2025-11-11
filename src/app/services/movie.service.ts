import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // URL del backend en Render (puedes cambiarla si lo corres en local)
  private apiUrl = 'https://catalogo-marvel-backend.onrender.com/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
