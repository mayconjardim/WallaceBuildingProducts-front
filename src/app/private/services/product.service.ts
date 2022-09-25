import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  findById(id: any): Observable<Product> {
    return this.http.get<Product>(`${API_CONFIG.baseUrl}/products/${id}`);
  }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_CONFIG.baseUrl}/products`);
  }
}
