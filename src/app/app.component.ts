import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BarraMenuComponent } from './components/barra-menu/barra-menu.component';
import { Usuario } from './interfaces/usuario';
import { UsuariosService } from './usuarios.service';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, BarraMenuComponent, RouterModule, CrearUsuarioComponent, MatDialogModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
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
