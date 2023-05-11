import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Coffe } from 'src/app/model/coffe';
import { ApiService } from 'src/app/services/api.service';
import * as jQuery from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import { Modal } from 'bootstrap';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  form: FormGroup;
  loading: boolean = true;
  listCoffes: Coffe[] = []
  listCoffesUser: Coffe[] = []

  valueUser: [] = []

  constructor(private service: ApiService,
              private formBuilder: FormBuilder,
              private router: Router) {

      this.form = this.formBuilder.group({
        nome: [null],
        cpf: [null],
        password: [null],
      })
    }



  ngOnInit(): void {

    const user = localStorage.getItem('user')
    if(user) {
      const parseUser = JSON.parse(user)
      this.valueUser = parseUser
    }

    const token = localStorage.getItem('token');
    if (token) {
      this.loadCoffes();
      this.loadCoffesUser();
    } else {
      // Lógica para lidar com o token ausente, por exemplo, redirecionar para a página de login.
    }

  }

  loadCoffes(): void {

    this.service.listCoffes().subscribe(
      (coffes: Coffe[]) => {
        this.listCoffes = coffes;
        this.loading = false;
      },
      (error) => {
        console.log('Erro ao carregar os cafés', error);
      }
    );
  }

  loadCoffesUser(): void {

    this.service.listCoffesUser().subscribe(
      (coffes: Coffe[]) => {
        console.log(coffes)
        this.listCoffesUser = coffes;
        this.loading = false;
      },
      (error) => {
        console.log('Erro ao carregar os cafés', error);
      }
    );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }


  openModal() {
    const myModalEl = document.getElementById('myModal');
    const modal = new Modal(myModalEl);
    modal.show();
  }

  onAddCoffe() {

  }


}
