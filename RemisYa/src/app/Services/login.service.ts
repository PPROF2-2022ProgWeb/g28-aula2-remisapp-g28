import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubjec = new Subject<boolean>();

  constructor ( private http:HttpClient ) { }

  //Generamos el token
  public generateToken(loginData:any){

    return this.http.post(`${baserUrl}/generate-token`,loginData);

  }

  //Iniciamos sesion y establecemos el token en el localStorage

  public loginUser(token:any){
    //Establecemos el valor osea almacenar el token
    localStorage.setItem('token', token);

  }
  //Metodo para comprobar si estas conectado o no
  public isLoggedIn(){

    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  //Cerramos sesion y eliminamos el token del localStorage

  public logout(){

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;

  }

  //Obtener el token
  public getToken(){

    return localStorage.getItem('token');

  }

  //Establecer un usuario en el localstoge
  public setUser(user:any){
                                //Convierte un valor js a JSON string
    localStorage.setItem('user', JSON.stringify(user));

  }
  //Obtener usuario
  public getUser(){

    let userStr = localStorage.getItem('user');

    if(userStr != null){
                //Parsear un string a JSON
      return JSON.parse(userStr);

    }else{

      this.logout();
      return null;

    }
  }

  //Obtener Rol de usuario
  public getUserRol(){

    let user = this.getUser();
    return user.authorities[0].authority;

  }
  //Devolver el actual usuario
  public getCurrentUser(){
    return this.http.get(`${baserUrl}/actual-usuario`);
  }

}
