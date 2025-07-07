import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RickService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  searchCharacters(name: string): Observable<any> {
    const params = new HttpParams().set('name', name);
    return this.http.get<any>(this.apiUrl, { params });
  }

  getEpisodeByUrl(url: string): Observable<any> {
  return this.http.get<any>(url);
}

}
