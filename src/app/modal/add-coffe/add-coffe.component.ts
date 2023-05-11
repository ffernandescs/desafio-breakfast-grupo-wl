import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-add-coffe',
  templateUrl: './add-coffe.component.html',
  styleUrls: ['./add-coffe.component.css']
})
export class AddCoffeComponent {

  formAddCoffe: FormGroup

  messageAddCoffe: string = '';
  messageType: string = '';


  loading: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private service: ApiService) {
      const storedName = localStorage.getItem('user');
      const parsedName = storedName ? JSON.parse(storedName) : '';
      this.formAddCoffe = this.formBuilder.group({
        nome: [{ value: parsedName, disabled: true }, Validators.required],
        item: ['', Validators.required],
        data: ['', Validators.required]
      });
  }

  addCoffe() {
    this.messageAddCoffe = '';
    if (this.formAddCoffe.valid) {
      const selectedDate = new Date(this.formAddCoffe.value.data);
      const currentDate = new Date();
      this.loading = true;

    if (selectedDate > currentDate) {
      this.messageType = 'error';
      this.messageAddCoffe = 'A data fornecida é posterior à data atual.';
      this.loading = false;
    } else {
        const coffeData = this.formAddCoffe.getRawValue();
        this.service.addCoffe(coffeData).subscribe(
          response => {
            setTimeout(() => {
              this.loading = false;
              window.location.reload();
            }, 2000);
            this.messageType = 'success';
            this.messageAddCoffe = 'Café da manha adicionado.';
          },
          error => {
            this.messageType = 'error';
            this.messageAddCoffe = 'Café da manha ja existe.';
            this.loading = false;
          }
        );
      }
    } else {
      this.messageType = 'error';
      this.messageAddCoffe = 'Preencha todos os campos.';
      this.loading = false;

  }
  }

}
