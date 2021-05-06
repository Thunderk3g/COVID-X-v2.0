import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  constructor(
    private http: HttpClient
  ) {
 }
get(user: any): Observable<any> {
  return this.http.post<any>( 'http://localhost:3000/postEntry' , user, {
    observe: 'response',
  });
}
updateEntry(entry: any): Observable<any> {
  return this.http.put<any>( 'http://localhost:3000/updateEntry' , entry, {
    observe: 'response',
  });
}
entries(): Observable<any> {
  return this.http.get<any>( 'http://localhost:3000/allentries' , {
    observe: 'response',
  });
}
verifiedentries(): Observable<any> {
  return this.http.get<any>( 'http://localhost:3000/verifiedentries' , {
    observe: 'response',
  });
}
contribute(user: any): Observable<any> {
  return this.http.post<any>( 'http://localhost:3000/contributeHelp' , user ,{
    observe: 'response',
  });
}
offer(user: any): Observable<any> {
  return this.http.post<any>( 'http://localhost:3000/offerHelp' , user,{
    observe: 'response',
  });
}
adminLogin(user: any): Observable<any> {
  return this.http.post<any>( 'http://localhost:3000/adminlogin' , user,{
    observe: 'response',
  });
}
}
