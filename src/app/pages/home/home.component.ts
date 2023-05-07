import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Coffe } from 'src/app/model/coffe';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loading: boolean = false;

  listCoffes: Coffe[] = []

  //coffesService: ApiService;

  constructor(private coffesService: ApiService) {
      this.loading = true;
      this.coffesService.listCoffes()
      .pipe(
        catchError(error => {
          return of([])
        })
      ) 
      .subscribe(coffes => {
        this.listCoffes = coffes;
        this.loading = false;
      });
    }

  ngOnInit(): void {
    this.loading = true;

  }

}
