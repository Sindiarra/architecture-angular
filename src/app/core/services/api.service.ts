import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";
import {ApiResponseModel} from "../models/api-response.model";
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router) { }

  get(url: string): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(environment.apiUrl + url);
  }

  post(url: string, data: any): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(environment.apiUrl + url, data);
  }

  put(url: string, data: any): Observable<ApiResponseModel> {
    return this.http.put<ApiResponseModel>(environment.apiUrl + url, data);
  }

  delete(url: string): Observable<ApiResponseModel> {
    return this.http.delete<ApiResponseModel>(environment.apiUrl + url);
  }

}
