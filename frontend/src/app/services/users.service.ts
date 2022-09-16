import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  BASE_URL:string = 'http://localhost:3000'
  constructor(private http:HttpClient) { }
  createUser(user:User):Observable<User>{
     return this.http.post<User>(`${this.BASE_URL}/users`, user);
  }
  getUsers():Observable<User>{
    return this.http.get<User>(`${this.BASE_URL}/users`);
  }
}
