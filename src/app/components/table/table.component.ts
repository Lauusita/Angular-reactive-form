import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { UsuariosService } from '../../usuarios.service';
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalCrearUsuarioComponent } from '../modal-crear-usuario/modal-crear-usuario.component';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    ModalCrearUsuarioComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  title = 'mi-app';
  existeUsuario: boolean = false;
  listadoUsuarios: Usuario[] = []

  constructor(private usuariosService: UsuariosService, private modal: MatDialog){}
  // listadoUsuarios: Usuario[] = [
  //   {id: 1, nombre: 'Elen Contreras'},
  //   {id: 2, nombre: 'John Doe'},
  //   {id: 3, nombre: 'Jane Doe'},
  // ]

  ngOnInit(): void {
    this.obtenerUsuarios()
  }

  obtenerUsuarios(){
    this.usuariosService.obtenerUsuarios().subscribe({
      next: (value: Usuario[]) => {
        this.listadoUsuarios = value
      }
    })
  }

  mostrarInformacion(avatar: string, correo: string): void {
    this.modal.open(ModalCrearUsuarioComponent, {
      data: {
        img: avatar,
        msg: correo
      }
    })
  }
}
