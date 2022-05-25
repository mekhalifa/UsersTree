import { User } from './../../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  public GetUsersData():Observable<User[]> {
   return this.getJSON( "../../../../assets/data/users/users.json") ;
  }


  public getJSON(jsonPath:string): Observable<any> {
    return this.http.get(jsonPath);
  }

}


