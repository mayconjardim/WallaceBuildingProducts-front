import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';
import { Orders } from '../models/Orders';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${API_CONFIG.baseUrl}/orders`);
  }

  create(order: Orders): Observable<Orders> {
    return this.http.post<Orders>(`${API_CONFIG.baseUrl}/orders`, order);
  }
}
