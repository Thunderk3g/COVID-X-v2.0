import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
  verifiedentries(): Observable<any> {
    return this.http.get<any>( AUTH_API + 'verifiedentries', {
      observe: 'response',
    });
  }
  offer(user: any): Observable<any> {
    return this.http.post<any>( AUTH_API + 'offerHelp' , user,{
      observe: 'response',
    });
  }
  get(user: any): Observable<any> {
    return this.http.post<any>( AUTH_API + 'postEntry' , user, {
      observe: 'response',
    });
  }
  updateEntry(entry: any): Observable<any> {
    return this.http.put<any>( AUTH_API + 'updateEntry' , entry, {
      observe: 'response',
    });
  }
  entries(): Observable<any> {
    return this.http.get<any>( AUTH_API + 'allentries' , {
      observe: 'response',
    });
  }
  contribute(user: any): Observable<any> {
    return this.http.post<any>(  AUTH_API + 'contributeHelp' , user ,{
      observe: 'response',
    });
  }
}
