import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sort } from './../Model/sortModel';
import { Query } from '../Model/queryModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  baseUrl:string = 'http://localhost:9000/netlify/functions/api/queries';
  constructor(private http: HttpClient) { }

  addQuery(query: Query):Observable<any> {
    return this.http.post<Query>(this.baseUrl,query,httpOptions);
  }
  /*getQuery(token:string):Observable<Query> {
    return this.http.get<Query>(`${this.baseUrl}`+"/"+`${token}`);
  }*/

  postSort(sortData: Sort) {
    return this.http.post<string>(`${this.baseUrl}`+"/sorts", sortData);
  }
}
