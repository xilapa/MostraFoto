import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public authenticate(userName: string, password: string): Observable<any> {
    return this.http.post(`${API_URL}/user/login`, { userName, password })
    // resposta {id: 1, name: "flavio", email: "flavio@alurapic.com.br"}
    // senha 123
  }
}
