import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { error } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  classeLogin = false;

  showIncorrectPasswordMessage: boolean = false;
  messageRegister: string = '';
  messageLogin: string = '';
  correctPassword: boolean = false;
  messageType: string = '';
  loading: boolean = false;

  formLogin: FormGroup;
  formRegister: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: ApiService,
    private router: Router) {

      this.formLogin = this.formBuilder.group({
        login: ['', Validators.required],
        password: ['', Validators.required]
      });

     this.formLogin.get('login')?.valueChanges.subscribe(value => {
      const formattedValue = this.formatCpf(value)
      this.formLogin.get('login')?.setValue(formattedValue, { emitEvent: false })
     })

      this.formRegister = this.formBuilder.group({
        nome: ['', Validators.required],
        login: ['', Validators.required],
        password: ['', Validators.required],
      });

      this.formRegister.get('login')?.valueChanges.subscribe(value => {
        const formattedValue = this.formatCpf(value)
        this.formRegister.get('login')?.setValue(formattedValue, { emitEvent: false })
       })

  }
  formatCpf(cpf: string): string {
    cpf = cpf.replace(/\D/g, ''); // Remove tudo que não for dígito
    cpf = cpf.slice(0, 11); // Limita o campo a 11 dígitos
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2}).*/, '$1.$2.$3-$4'); // Adiciona pontos e traço
    return cpf;
  }

  ngOnInit(): void {

  }

  onCancel() {
  }

  onLogin() {
    this.messageLogin = ''
    if (this.formLogin.valid) {
      this.loading = true;
      this.service.login(this.formLogin.value).subscribe(
        response => {
          this.messageType = 'success';
          this.messageLogin = 'Usuario Conectado com sucesso';
          this.loading = false;
          const token = response.token
          localStorage.setItem('token', token);
          this.formLogin.controls['password'].setErrors(null);

          const user = response.nome
          localStorage.setItem('user', JSON.stringify(user));
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 2000);
        },
        (error) => {
          this.messageLogin = 'Usuario e senha incorreto';
          this.messageType = 'error';
          this.loading = false;
        }
      )
    }
  }



  onRegister() {
    if(this.formRegister.valid) {
      this.loading = true;
      this.service.register(this.formRegister.value).subscribe(
        response => {
          this.loading = false;
          this.messageRegister = 'Usuario Cadastrado com sucesso';
          this.messageType = 'success';
          this.formRegister.reset();
        },
        error => {
          this.messageRegister = 'Usuário ja existe';
          this.messageType = 'error';
          this.loading = false;
        }
      )
    } else {
      this.messageType = 'error';
      this.messageRegister = 'Preencha todos os campos';
    }
  }


  isPasswordInvalid(): boolean {
    const control = this.formLogin.controls['password'];
    return control.invalid && (control.dirty || control.touched);
  }

  isloginInvalid(): boolean {
    const control = this.formLogin.controls['login'];
    return control.invalid && (control.dirty || control.touched);
  }

  isNomeInvalid(): boolean {
    const control = this.formRegister.controls['nome'];
    return control.invalid && (control.dirty || control.touched);
  }


  isCpfInvalid(): boolean {
    const control = this.formRegister.controls['login'];
    return control.invalid && (control.dirty || control.touched);
  }


  isPassReInvalid(): boolean {
    const control = this.formRegister.controls['password'];
    return control.invalid && (control.dirty || control.touched);
  }

  isPassConfReInval(): boolean {
    const control = this.formRegister.controls['passwordConfirm'];
    return control.invalid && (control.dirty || control.touched);
  }

  onSubmit() {

  }

  adicionouClasse() {
    this.classeLogin = true
  }

  removerClasse() {
    this.classeLogin = false;
}

}
