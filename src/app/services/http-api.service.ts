import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpApiService {


  private baseUrl = 'https://jsonplaceholder.typicode.com/';

    private getEndUrl = this.baseUrl+'users';

    private postEndUrl = this.baseUrl+'posts';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.getEndUrl);
  }

  createUser(data: any): Observable<any> {
    return this.http.post(this.postEndUrl, data);
  }

  registerUser(payload: any): Observable<any> {
    return this.http.post(this.postEndUrl, payload);
  }

  
}
