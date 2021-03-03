import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[];
  link = 'http://localhost:3000/api/personnes';

  constructor(private http: HttpClient) {}

  // Nos Observables
  getPersonnes(): Observable<Personne[]> {
    // http://localhost:3000/api/personnes
    return this.http.get<Personne[]>(this.link);
  }

  getPersonneById(id: number): Observable<Personne> {
    // http://localhost:3000/api/personnes/{id}
    return this.http.get<Personne>(this.link + `/${id}`);
  }

  addPersonne(personne: Personne): Observable<Personne> {
    // http://localhost:3000/api/personnes
    return this.http.post<Personne>(this.link, personne);
  }

  deletePersonne(id: number): Observable<any> {
    // http://localhost:3000/api/personnes/{id}
    return this.http.delete(this.link + `/${id}`);
  }
}
