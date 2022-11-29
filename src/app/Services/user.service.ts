import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly apiURL="http://localhost:8080/api/";
  constructor(private http:HttpClient) { }
  getUserDetails():Observable<any[]>{
    return this.http.get<any>(this.apiURL+'get-user-info');
  }

  addUserDetails(val:any){
    return this.http.post(this.apiURL+'post-user-info',val);
  }
}
