import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8889';
@Injectable({
  providedIn: 'root',
})
export class BdTestService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<BdTestService[]> {
    return this.http.get<BdTestService[]>(baseUrl);
  }
}
console.log(BdTestService);
