import { HttpClient, HttpParams } from '@angular/common/http';
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
    /*  const token = localStorage.getItem('token');
    if (token) {
      const params = new HttpParams().set('access_token', token);
      return this.http.post<Personne>(this.link, personne, { params });
    } */
    return this.http.post<Personne>(this.link, personne);
  }

  deletePersonne(id: number): Observable<any> {
    // http://localhost:3000/api/personnes/{id}
    return this.http.delete(this.link + `/${id}`);
  }
  updateCvPersonne(personne: Personne): Observable<Personne> {
    // console.log('CV SERVICE', personne);
    return this.http.put<Personne>(this.link, personne);
  }

  findByName(name): Observable<Personne[]> {
    const filter = `{"where" : {"name": {"like":"%${name}%"} }}`;
    const params = new HttpParams().set('filter', filter);
    // console.log(filter);
    return this.http.get<Personne[]>(this.link, { params });
  }
}
