import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }
  apiCall()
  {
    let url =('https://jsonplaceholder.typicode.com/posts');
    return this.http.get(url);
  }
}
