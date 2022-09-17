import { Observable } from 'rxjs';
import { API_CONFIG } from './../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dispatcher } from '../models/Dispatcher';

@Injectable({
  providedIn: 'root',
})
export class DispatcherService {
  constructor(private http: HttpClient) {}

  findById(id: any): Observable<Dispatcher> {
    return this.http.get<Dispatcher>(`${API_CONFIG.baseUrl}/dispatchers/${id}`);
  }
  findAll(): Observable<Dispatcher[]> {
    return this.http.get<Dispatcher[]>(`${API_CONFIG.baseUrl}/dispatchers`);
  }

  create(dispatcher: Dispatcher): Observable<Dispatcher> {
    return this.http.post<Dispatcher>(
      `${API_CONFIG.baseUrl}/dispatchers`,
      dispatcher
    );
  }

  update(dispatcher: Dispatcher): Observable<Dispatcher> {
    return this.http.put<Dispatcher>(
      `${API_CONFIG.baseUrl}/dispatchers/${dispatcher.id}`,
      dispatcher
    );
  }

  delete(id: any): Observable<Dispatcher> {
    return this.http.delete<Dispatcher>(
      `${API_CONFIG.baseUrl}/dispatchers/${id}`
    );
  }
}
