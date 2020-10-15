import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private REST_API_SERVER = "http://morganstanley.azure-api.net/myfeed/feedservice/getfeed?userId=23RMY";
  //private REST_API_SERVER = "/myfeed/feedservice/getfeed?userId=23RMY";
  //private REST_API_SERVER = "https://reqres.in/api/users?page=2";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(){
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    const httpOptions = {
      headers: headers
    }
    return this.httpClient.get(this.REST_API_SERVER).pipe(catchError(this.handleError));
  }
}
