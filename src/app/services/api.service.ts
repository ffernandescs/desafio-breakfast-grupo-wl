import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Coffe } from 'src/app/model/coffe';
import { tap, delay } from 'rxjs';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API = '/api'
  private readonly id_user = localStorage.getItem('id_user')

  private getAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  constructor(private httpClient: HttpClient) {}

  listCoffes() {
    return this.httpClient.get<Coffe[]>(this.API + '/coffes/listCoffes', { headers: this.getAuthorizationHeader() })
      .pipe(
        delay(300))
  }

  listCoffesUser() {
    return this.httpClient.get<Coffe[]>(this.API + '/coffes/listCoffesUser?idUsuario=' + this.id_user, { headers: this.getAuthorizationHeader() })
      .pipe(
        delay(300))
  }

  login(record: User) {
    return this.httpClient.post<User>(this.API + '/login', record).pipe(
      delay(2000));
  }

  register(record: User) {
    return this.httpClient.post<User>(this.API + '/register', record)
  }


  addCoffe(record: Coffe) {
    const headers = this.getAuthorizationHeader();
    return this.httpClient.post<Coffe>(`${this.API}/coffes/register`, record, { headers })
      .pipe(
        delay(50)
      );
  }
}
