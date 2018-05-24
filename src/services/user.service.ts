import { User } from './../entities/user';
import { Injectable } from "@angular/core";

import { HttpModule, RequestOptions } from '@angular/http';

import  { HttpClient } from "@angular/common/http"
 
@Injectable()
export class UserService {
address = "http://192.168.100.48:1616/";

constructor(private http: HttpClient){

}

  login(user:User){


  return this.http.get(this.address+"authentification?login="+user.login+"&password="+user.password);
   

 }
  signUp(user:User){
    return this.http.get(this.address+"insert?email="+user.email+"&login="+user.login+"&password="+user.password+"&address="+user.address);
  }
public getUserById(id : number){
    return this.http.get(this.address+"selectById?id="+id);
}
}