import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { TableComponent } from './components/table/table.component';

export const routes: Routes = [
  {
    path: "",
    component: TableComponent
  },
  {
    path: "create",
    component: CrearUsuarioComponent
  }
];
