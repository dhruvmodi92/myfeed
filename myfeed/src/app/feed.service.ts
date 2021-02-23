import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { constants } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private userId = 'XYZ89';
  // private REST_API_SERVER = "https://morganstanley.azure-api.net/researchfeed/feedservice/getfeed?userId=XYZ89";
  // private REST_API_SERVER = "https://morganstanley.azure-api.net/myfeed/feedservice/getfeed?userId=XYZ89";
  // private REST_API_SERVER = "/myfeed/feedservice/getfeed?userId=XYZ89";
  // private REST_API_SERVER = "http://portal-myfeed.westus.azurecontainer.io/feedservice/getfeed?userId=XYZ89";

  constructor(private httpClient: HttpClient) { }

  getUserId() {
    return this.userId;
  }

  setUserId(userId) {
    this.userId = userId;
  }

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
    const url = "https://morganstanley.azure-api.net/researchfeed/feedservice/getfeed?userId=" + this.userId;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
      })
    }
    return this.httpClient.get(url, httpOptions);
  }

  public processFeedResponse(response) {
    let allDocs = [], audioDocs = [], videoDocs = [], showAllTabs = false;
    if (response && response.status === 'SUCCESS' && response.userFeedDetails && response.userFeedDetails.length) {
      response.userFeedDetails.forEach((item) => {
        if (item && item.docs && item.docs.length) {
          allDocs = allDocs.concat(item.docs);
          // item.docs.forEach((doc) => {
          //   console.log(new Date(doc.pd));
          // })
        }
        if (item && item.audio && item.audio.length) {
          audioDocs = audioDocs.concat(item.audio);
          showAllTabs = true;
        }
        if (item && item.video && item.video.length) {
          videoDocs = videoDocs.concat(item.video);
          showAllTabs = true;
        }
      })
    }
    return { allDocs, audioDocs, videoDocs, showAllTabs };
  }

  public getFeedCount() {
    const url = "https://morganstanley.azure-api.net/researchfeed/redisservice/get?userId=" + this.userId;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
      })
    }
    return this.httpClient.get(url, httpOptions);
  }

  public resetFeedCount() {
    const url = "https://morganstanley.azure-api.net/researchfeed/redisservice/reset?userId=" + this.userId;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
      })
    }
    return this.httpClient.get(url, httpOptions);
  }

  public pollFeed() { }
}
