import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { TableComponent } from './components/table/table.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

export const routes: Routes = [
  {
    path: "",
    component: TableComponent
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
    
  }
];
