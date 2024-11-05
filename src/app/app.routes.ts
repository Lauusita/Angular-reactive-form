import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { TableComponent } from './components/table/table.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "create",
    component: CrearUsuarioComponent
  },
  {
    path: "products",
    component: ListProductsComponent
  },
  {
    path: "detalles/:id",
    component: ProductDetailsComponent,
  },
  {
    path: "login",
    component: LoginComponent
  }
];
