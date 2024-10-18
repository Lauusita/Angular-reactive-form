import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { UsuariosService } from '../../usuarios.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  title = 'mi-app';
  existeUsuario: boolean = false;
  listadoUsuarios: Usuario[] = []

  constructor(private usuariosService: UsuariosService){}
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
      next: (value: Usuario[]) =>{
        console.log(value)
        this.listadoUsuarios = value
      }
    })
  }
}
