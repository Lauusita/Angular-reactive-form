import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthResponse, Login } from '../../interfaces/login';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ModalCrearUsuarioComponent } from '../modal-crear-usuario/modal-crear-usuario.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
    username: new FormControl("") || "",
    password: new FormControl("") || ""
  }

  constructor(private modal: MatDialog, private fb: FormBuilder, private authService: AuthService, private router: Router){
    this.form = this.fb.group({
      username: new FormControl(this.formModel.username.value, 
        [
          Validators.required
        ]
      ),
      password: new FormControl(this.formModel.password.value, 
        [
          Validators.required
        ]
      )
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

  login() {
    this.authService.login(this.form.value).subscribe({
      next: (value: AuthResponse) => {
        this.authService.setToken(value.token)
        this.router.navigateByUrl('/products')
      },
      error(err) {
        (err.status == 401) ? alert('Usuario y/o contraseña incorrecta') : alert('Error en el servidor')
      }
    })
  }
}
