import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { UserFormModel } from '../../interfaces/crear-usuario';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { ModalCrearUsuarioComponent } from '../modal-crear-usuario/modal-crear-usuario.component';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, ModalCrearUsuarioComponent, MatButtonModule, MatDialogModule],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {
  profileForm: FormGroup<UserFormModel>;

  formModel: UserFormModel = {
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    id: new FormControl(),
    birthdate: new FormControl(""),
    country: new FormControl(""),
    gender: new FormControl("")
  };
  

  constructor(private modal: MatDialog) {
    this.profileForm = this.buildForm(this.formModel);
  }
  
  buildForm(model: UserFormModel): FormGroup {
    return new FormGroup({
      firstName: new FormControl(model.firstName.value, Validators.required),
      lastName: new FormControl(model.lastName.value, Validators.required),
      id: new FormControl(model.id.value, 
        [Validators.maxLength(10), Validators.required]
      ),
      birthdate: new FormControl(model.birthdate.value, Validators.required),
      country: new FormControl(model.country.value, Validators.required),
      gender: new FormControl(model.gender.value, Validators.required),
    });
  }

  validate() {
    document.getElementById("uid")!.addEventListener('input', () => {
      const form = document.getElementById('validateId') 

      const idValue = this.profileForm.value.id as number
      const numberRegexp = /^\d+$/
  

      if ( idValue > 10000000000) {
        form!.innerHTML = "MÁXIMO 10 DÍGITOS"

      }
    })
  }

  openModal(): void {
    this.modal.open(ModalCrearUsuarioComponent, {
      data: {
        msg: "Formulario enviado exitosamente"
      }
    })
  }
}
