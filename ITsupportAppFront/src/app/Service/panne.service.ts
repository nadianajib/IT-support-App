import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Panne } from '../model/panne';

@Injectable({
  providedIn: 'root'
})
export class PanneService {
  addPanne(newPanne: Panne) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:8089/api/pannes'; 
  constructor(private http: HttpClient) { }

  getPannes(): Observable<Panne[]> {
    return this.http.get<Panne[]>(`${this.apiUrl}/all`);
  }

  getPanneById(id: number): Observable<Panne> {
    return this.http.get<Panne>(`${this.apiUrl}/${id}`);
  }

  createPanne(panne: Panne): Observable<Panne> {
    return this.http.post<Panne>(`${this.apiUrl}/add`, panne);
  }

  updatePanne(id: number, panne: Panne): Observable<Panne> {
    return this.http.put<Panne>(`${this.apiUrl}/${id}`, panne);
  }

  deletePanne(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
