import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) { }

  public authenticate(userName: string, password: string): Observable<any> {
    return this.http.post(`${API_URL}/user/login`, { userName, password }, { observe: 'response'})
      .pipe(tap(r => {
          const authToken = r.headers.get('x-access-token');
        this.userService.setToken(authToken as string);
            }))
    // resposta {id: 1, name: "flavio", email: "flavio@alurapic.com.br"}
    // senha 123
  }
}
