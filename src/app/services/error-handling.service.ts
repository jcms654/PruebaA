import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class ErrorHandlingService {

  constructor(
    private router: Router) {
  }


  catchError<TRes>(err: any): Observable<TRes> {
 
    if (err instanceof HttpErrorResponse) {
      if (err.status === 500) {
        console.error('Error', err.status, err.url, err.statusText, err.error);
        return throwError(err);
      }
      if (err.status === 404) {
        console.warn('Error 404, resource not found!', err.url, err.statusText);
        return throwError(err);
      }

      console.error('Unknown HttpErrorResponse', err);
      return throwError(err);
    }

    console.error('Observable error:', err);
    return throwError(err);
  }
}
