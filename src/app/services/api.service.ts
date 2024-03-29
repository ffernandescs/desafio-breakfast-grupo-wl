import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Coffe } from 'src/app/model/coffe';
import { tap, delay, Observable } from 'rxjs';
import { User } from '../model/user';
import { environment } from 'environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API = environment.apiUrl
  private idUsuario = '0';

  private getAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  constructor(private httpClient: HttpClient) {}

  setUserId(idUsuario: number) {

    localStorage.setItem(this.idUsuario, idUsuario.toString());
  }

  getUserId(): number {
    const userId = localStorage.getItem(this.idUsuario);
    return userId ? +userId : 0;
  }

  listCoffes() {
    return this.httpClient.get<Coffe[]>(this.API + '/coffes/listCoffes', { headers: this.getAuthorizationHeader() })
      .pipe(
        delay(500))
  }

  listCoffesUser() {
    const idUsuario = this.getUserId();
    return this.httpClient.get<Coffe[]>(`${this.API}/coffes/listCoffesUser?idUsuario=${idUsuario}`, { headers: this.getAuthorizationHeader() })
      .pipe(
        delay(500))
  }

  deleteCoffee(idCoffe: number, idUsuario: number) {
    console.log(idCoffe, idUsuario)
    return this.httpClient.delete(`${this.API}/coffes/deleteCoffe?idCoffe=${idCoffe}&idUsuario=${idUsuario}`, { headers: this.getAuthorizationHeader(), responseType: 'text' });
  }

  login(record: User) {
    return this.httpClient.post<User>(this.API + '/login', record).pipe(
      delay(500));
  }

  register(record: User) {
    return this.httpClient.post<User>(this.API + '/register', record).pipe(
      delay(500));
  }


  addCoffe(record: Coffe) {
    const headers = this.getAuthorizationHeader();
    return this.httpClient.post<Coffe>(`${this.API}/coffes/register`, record, { headers })
      .pipe(
        delay(300)
      );
  }
}
