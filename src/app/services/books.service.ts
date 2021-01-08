import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  url: string = "books";
  
  constructor(
    private apiService: ApiService,
  ) {}

  get(url = ""): Observable<any> {
    debugger;
    url = this.url + url;
    return this.apiService.get(url, {});
  }

  post(url = "", body): Observable<any> {
    debugger;
    url = this.url + url;
    return this.apiService.post(url, body, {});
  }
  
  put(url = "", body): Observable<any> {
    debugger;
    url = this.url + url;
    return this.apiService.put(url, body, {});
  }

  delete(url = "", body): Observable<any> {
    debugger;
    url = this.url + url;
    return this.apiService.delete(url, {});
  }
}
