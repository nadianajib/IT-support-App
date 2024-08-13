import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Panne } from '../model/panne';


@Injectable({
  providedIn: 'root'
})
export class PanneService {
  addPanne(newPanne: Panne) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:8089/api/pannes/Admin'; 
  constructor(private http: HttpClient) { }

  getPannes(): Observable<Panne[]> {
    const headers = this.createAuthorizationHeader();

    return this.http.get<Panne[]>(`${this.apiUrl}/all`,{ headers });
  }

  getPanneById(id: number): Observable<Panne> {
    const headers = this.createAuthorizationHeader();

    return this.http.get<Panne>(`${this.apiUrl}/${id},panne`,{ headers });
  }

  createPanne(panne: Panne): Observable<Panne> {
    const headers = this.createAuthorizationHeader();

    return this.http.post<Panne>(`${this.apiUrl}/add`, panne,{ headers });
  }

  updatePanne(id: number, panne: Panne): Observable<Panne> {
    const headers = this.createAuthorizationHeader();

    return this.http.put<Panne>(`${this.apiUrl}/${id}`, panne,{ headers });
  }

  deletePanne(id: number): Observable<void> {
    const headers = this.createAuthorizationHeader();

    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  private createAuthorizationHeader(): HttpHeaders | undefined {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set("Authorization", "Bearer " + jwtToken);
    } else {
      console.log("JWT token not found in local storage");
      return undefined;
    }
  }
}
