import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Painting } from '../interfaces/painting.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaintingsService {
  private apiEndPoint: string = environment.apiEndPoint;

  constructor(private http: HttpClient) {}

  getPaintings(): Observable<Painting[]> {
    return this.http.get<Painting[]>(`${this.apiEndPoint}/paintings`);
  }

  getPaintingById(id: string): Observable<Painting> {
    return this.http.get<Painting>(`${this.apiEndPoint}/paintings/${id}`);
  }

  getSuggestions(term: string): Observable<Painting[]> {
    return this.http.get<Painting[]>(
      `${this.apiEndPoint}/paintings?q=${term}&_limit=6`
    );
  }

  addPainting(painting: Painting): Observable<Painting> {
    return this.http.post<Painting>(`${this.apiEndPoint}/paintings`, painting);
  }

  updatePainting(painting: Painting): Observable<Painting> {
    return this.http.put<Painting>(`${this.apiEndPoint}/paintings/${painting.id}`, painting);
  }

  deletePainting(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiEndPoint}/paintings/${id}`);
  }
}
