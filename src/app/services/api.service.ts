import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class ApiService {
  url: string = "http://localhost:3000/";
  httpClient: HttpClient
  // options: {
  //   headers?: HttpHeaders | {[header: string]: string | string[]},
  //   observe?: 'body' | 'events' | 'response',
  //   params?: HttpParams|{[param: string]: string | string[]},
  //   reportProgress?: boolean,
  //   responseType?: 'arraybuffer'|'blob'|'json'|'text',
  //   withCredentials?: boolean,
  // }

  constructor(
    httpClient: HttpClient
  ) {
    this.httpClient = httpClient;
   }

  get(url = "", options = {}) {
    url = "http://localhost:3000/" + url;
    // debugger;
    return this.httpClient.get(url, options);
  }

  post(url = "", body = {}, options = {}) {
    url = this.url + url;
    debugger;
    return this.httpClient.post(url, body, options);
  }

  put(url = "", body = {}, options = {}) {
    url = this.url + url;
    debugger;
    return this.httpClient.put(url, body, options);
  }

  delete(url = "", options = {}) {
    url = this.url + url;
    debugger;
    return this.httpClient.delete(url, options);
  }
}

