import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployee(): Observable<any> {
    return this.http.get(`/api/v1/employees`).pipe(
      map((response: any) =>
        response && response.data.length ? response.data : []
      ),
      catchError((error) => of([]))
    );
  }
}
