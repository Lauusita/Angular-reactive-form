import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import dev from "../environments/dev"
import { Observable } from 'rxjs';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(`${dev.apiUrl}/products`)
  }

  getProductById(id: string): Observable<Products> {
    return this.http.get<Products>(`${dev.apiUrl}/products/${id}`)
  }
}
