import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Login } from '../../interfaces/login';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ModalCrearUsuarioComponent } from '../modal-crear-usuario/modal-crear-usuario.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup<Login>
  img = "assets/login.gif"
  hide = signal(true);


  formModel: Login = {
    email: new FormControl(""),
    password: new FormControl("")
  }

  constructor(private modal: MatDialog){
    this.form = this.buildForm(this.formModel)
  }

  buildForm(model: Login) {
    return new FormGroup({
      email: new FormControl(model.email.value, [Validators.required, Validators.email]),
      password: new FormControl(model.password.value, [Validators.required, Validators.minLength(8)])
    })
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  openModal(): void {
    this.modal.open(ModalCrearUsuarioComponent, {
      data: {
        img: this.img,
        msg: "Bienvenido"
      }
    })
  }
}
