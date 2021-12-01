import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlingService } from './error-handling.service';
import { UrlWrapperService } from './url-wrapper.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  private readonly baseurl: string = '';
  private readonly baseurlM: string = '';

  constructor(private readonly _http: HttpClient,
    private readonly _urlWrapperService: UrlWrapperService,
    private errorHandler: ErrorHandlingService) {
    this.baseurl = this._urlWrapperService.getBaseBackApiUrl();
    this.baseurlM = this._urlWrapperService.getBaseMidleApiUrl();
  }

  getPosts(): Observable<any> {
    const url = `${this.baseurl}/posts`;
    return this._http.get(url)
    .pipe(catchError(err => this.errorHandler.catchError<any>(err)));
  }

  getPost(id): Observable<any> {
    const url = `${this.baseurl}/posts/${id}`;
    return this._http.get(url)
    .pipe(catchError(err => this.errorHandler.catchError<any>(err)));
  }

  detailsPost(id): Observable<any> {
    const url = `${this.baseurlM}/?post=${id}`;
    return this._http.get(url)
    .pipe(catchError(err => this.errorHandler.catchError<any>(err)));
  }

  putPost(id,body): Observable<any> {
    const url = `${this.baseurl}/posts/${id}`;
    return this._http.put(url,body)
    .pipe(catchError(err => this.errorHandler.catchError<any>(err)));
  }

  newPost(body): Observable<any> {
    const url = `${this.baseurl}/posts`;
    return this._http.post(url,body)
    .pipe(catchError(err => this.errorHandler.catchError<any>(err)));
  }
}