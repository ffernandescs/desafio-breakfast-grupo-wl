import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
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
      const selectedDate = moment(this.formAddCoffe.value.data).utc();
      const currentDate = moment().utc();

      this.loading = true;

    if (selectedDate.isAfter(currentDate)) {

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
    } else {
      this.messageType = 'error';
      this.messageAddCoffe = 'A data fornecida deve ser maior que a data atual.';
      this.loading = false;
      }
    } else {
      this.messageType = 'error';
      this.messageAddCoffe = 'Preencha todos os campos.';
      this.loading = false;

  }
  }

}
