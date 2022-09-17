import { Observable } from 'rxjs';
import { API_CONFIG } from './../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manager } from '../models/Manager';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  constructor(private http: HttpClient) {}

  findById(id: any): Observable<Manager> {
    return this.http.get<Manager>(`${API_CONFIG.baseUrl}/managers/${id}`);
  }
  findAll(): Observable<Manager[]> {
    return this.http.get<Manager[]>(`${API_CONFIG.baseUrl}/managers`);
  }

  create(manager: Manager): Observable<Manager> {
    return this.http.post<Manager>(`${API_CONFIG.baseUrl}/managers`, manager);
  }

  update(manager: Manager): Observable<Manager> {
    return this.http.put<Manager>(
      `${API_CONFIG.baseUrl}/managers/${manager.id}`,
      manager
    );
  }

  delete(id: any): Observable<Manager> {
    return this.http.delete<Manager>(`${API_CONFIG.baseUrl}/managers/${id}`);
  }
}
