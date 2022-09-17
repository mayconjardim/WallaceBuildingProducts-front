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

  findAll(): Observable<Manager[]> {
    return this.http.get<Manager[]>(`${API_CONFIG.baseUrl}/managers`);
  }

  create(manager: Manager): Observable<Manager> {
    return this.http.post<Manager>(`${API_CONFIG.baseUrl}/managers`, manager);
  }
}
