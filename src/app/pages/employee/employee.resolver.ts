import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeResolver implements Resolve<boolean> {
  constructor(private http: HttpClient) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.http.get(`/api/v1/employees`).pipe(
      map((response: any) =>
        response && response.data.length ? response.data : []
      ),
      catchError((error) => of([]))
    );

    // return of(true);
  }
}
