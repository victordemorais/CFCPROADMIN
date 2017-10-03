import { ErrorHandler } from './../app.error-handle';
import { PRO_API } from './../app.api';
import { UserModel } from './user.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }
  users(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${PRO_API}/usuarios/getUsuarios`);

  }
  cadastraUser(user: UserModel): Observable<any> {
   
    return this.http.post(`${PRO_API}/usuarios/create`,JSON.stringify(user))
  }
  address(cep:string): Observable<any> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.get(`http://api.postmon.com.br/v1/cep/${cep}`)
  }
}
