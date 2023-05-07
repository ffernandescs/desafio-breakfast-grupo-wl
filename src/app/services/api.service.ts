import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Coffe } from 'src/app/model/coffe';
import { tap, delay } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API = 'api/coffes'

  constructor(private httpClient: HttpClient) { }

  listCoffes() {
    return this.httpClient.get<Coffe[]>(this.API)
      .pipe(
        delay(1000),
        tap(coffes => console.log(coffes))
      )
  }


}
