import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-add-coffe',
  templateUrl: './add-coffe.component.html',
  styleUrls: ['./add-coffe.component.css']
})
export class AddCoffeComponent {

  formAddCoffe: FormGroup

  constructor(private formBuilder: FormBuilder,
    private service: ApiService) {

      this.formAddCoffe = this.formBuilder.group({
        nome: ['', Validators.required],
        item: ['', Validators.required],
        data: ['', Validators.required]
      });

  }


  addCoffe() {
    if (this.formAddCoffe.valid) {
      const coffeData = this.formAddCoffe.value;
      this.service.addCoffe(coffeData).subscribe(
        response => {
          console.log('Deu certo', response);
        },
        error => {
          console.log('Deu errado', error);
        }
      );
    }
  }

}
