import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-modal-crear-usuario',
  standalone: true, 
  imports: [MatDialogModule, RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: './modal-crear-usuario.component.html',
  styleUrl: './modal-crear-usuario.component.css'
})
export class ModalCrearUsuarioComponent {
  constructor(public dialogRef: MatDialogRef<ModalCrearUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  cancelar() {
    this.dialogRef.close();
  }
}
