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

  constructor(private httpClient: HttpClient) { }

  listCoffes() {

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<Coffe[]>(this.API + '/coffes/listarTodos', { headers })
      .pipe(
        delay(2000))
  }

  login(record: User) {
    return this.httpClient.post(this.API + '/login', record).pipe(
      delay(2000));
  }

  vaslidLogin() {
    return this.httpClient.get(`${this.API}/user/login?login=06402326470&password=123 `)
  }

  saveCoffe(record: Coffe) {
    return this.httpClient.post<Coffe>(this.API + "/coffes/listarTodos", record).pipe()
  }


}
