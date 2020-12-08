import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  // private REST_API_SERVER = "https://morganstanley.azure-api.net/myfeed/feedservice/getfeed?userId=23RMY";
  // private REST_API_SERVER = "/myfeed/feedservice/getfeed?userId=23RMY";
  private REST_API_SERVER = "http://portal-myfeed.westus.azurecontainer.io/feedservice/getfeed?userId=23RMY";

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

  public sendGetRequest() {
    // let headers = new HttpHeaders();
    // headers = headers.set('Accept', 'application/json');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
      })
    }
    // return this.httpClient.get(this.REST_API_SERVER).pipe(
    //   map(response => response),
    //   catchError(this.handleError)
    // );
    return this.httpClient.get(this.REST_API_SERVER, httpOptions);
  }

  public processFeedResponse(response) {
    let feedDocs = [];
    if (response && response.status === 'SUCCESS' && response.userFeedDetails && response.userFeedDetails.length) {
      response.userFeedDetails.forEach((item) => {
        if (item && item.docs && item.docs.length) {
          feedDocs = feedDocs.concat(item.docs);
          // item.docs.forEach((doc) => {
          //   console.log(new Date(doc.pd));
          // })
        }
      })
    }
    return feedDocs;
  }
}
