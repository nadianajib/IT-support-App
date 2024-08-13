import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipement } from '../model/equipement';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  private apiUrl = 'http://localhost:8089/api/equipements/Admin'; 

  constructor(private http: HttpClient) { }

  

  getEquipement(): Observable<Equipement[]> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<Equipement[]>(`${this.apiUrl}/all` ,{ headers });

  }

  createEquipement(equipement: Equipement): Observable<Equipement> {
    const headers = this.createAuthorizationHeader();
    return this.http.post<Equipement>(`${this.apiUrl}/add`, equipement, { headers });
  }
  
  updateEquipement(id: number, equipement: Equipement): Observable<Equipement> {
    const headers = this.createAuthorizationHeader();
    return this.http.put<Equipement>(`${this.apiUrl}/${id}`,equipement, { headers });
  }

  deleteEquipement(id: number): Observable<void> {
    const headers = this.createAuthorizationHeader();
    return this.http.delete<void>(`${this.apiUrl}/${id}`,{ headers });
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
