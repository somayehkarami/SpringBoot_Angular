import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  //@Injectable mark this class as provider and it can be injected into various components

  baseURL: string = 'http://localhost:8080/api/v1/employees';

  constructor(private httpClient: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseURL);
  }
}
