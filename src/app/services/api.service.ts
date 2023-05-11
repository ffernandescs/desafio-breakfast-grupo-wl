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

  private getAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  constructor(private httpClient: HttpClient) {}

  listCoffes() {
    return this.httpClient.get<Coffe[]>(this.API + '/coffes/listarTodos', { headers: this.getAuthorizationHeader() })
      .pipe(
        delay(2000))
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
    return this.httpClient.post<Coffe>(`${this.API}/coffes/criar`, record, { headers })
      .pipe(
        delay(2000)
      );
  }


}
