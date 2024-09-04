import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  private apiUrl = 'http://localhost:8080/api/user-types';

  constructor(private http: HttpClient) { }

  getUserTypes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createUserType(userType: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userType);
  }

  deleteUserType(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getUserTypeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateUserType(userType: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${userType.id}`, userType);
  }
}

