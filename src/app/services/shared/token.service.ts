import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  private issuer = {
    login:  'http://localhost/api/auth/ '      /* 'https://u08recipeapi.herokuapp.com/api/auth/login' */,
    register:'http://localhost/api/auth/ ' /* 'https://u08recipeapi.herokuapp.com/api/auth/register' */
  }

  constructor() { }

  handleData(token:string){
    localStorage.setItem('auth_token', token);
  }

  getToken(){
    return localStorage.getItem('auth_token');
  }

  // Verify the token
  isValidToken(){ 
     const token = this.getToken();
     if(token){
     return true
      }
     else {
       return false;
    }
 }

/*   payload(token:string) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  } */

  // User state based on valid token
  isLoggedIn() {
    return this.isValidToken() ;
  }

  // Remove token
  removeToken(){
    localStorage.removeItem('auth_token');
  }

}