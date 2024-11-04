import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Products } from '../../interfaces/products';
import { MatCardImage, MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MatCardModule, MatChipsModule, MatButtonModule, MatCardImage],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit{
  list: Products[] = []

  constructor(private productsService: ProductosService) {}
  ngOnInit(): void {
    this.obtenerProducts()
  }

  obtenerProducts() {
    this.productsService.getProduct().subscribe({
      next: (value: Products[]) => {
        this.list = value
      },
      error(err) {
        console.log(err);
        
      },
    })
  }
}
