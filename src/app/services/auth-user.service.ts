import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

export interface user{
  username:string;
  success:string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthUserService {
  constructor(private http:HttpClient) { }

  login(username:string, password:string) {
    return this.http.post<user>('/api/auth', {username:username, password:password});
  }
}
