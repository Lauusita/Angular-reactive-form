import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Products } from '../../interfaces/products';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  @Input() id!: string;
  data!: Products;

  constructor(private readonly productService: ProductosService) {}

  ngOnInit(): void {
    this.obtenerProducto()
  }

  obtenerProducto() {
    this.productService.getProductById(this.id).subscribe({
      next: (value: Products) => {
        this.data = value
      }
    })
  }
}
