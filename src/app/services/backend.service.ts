import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './shared/token.service';



@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private BACKEND_API_URL =  'http://localhost/api/auth/'/* 'https://u08recipeapi.herokuapp.com/api/auth' */


  constructor(private HttpClient: HttpClient, private tokenService: TokenService) {  }
    /**
     * register
     */ 
    
    
    public addFav(favorites:object) {
        console.log(favorites);
      const  accessToken = this.tokenService.getToken();
      return this.HttpClient.post(this.BACKEND_API_URL+'addtofavorites', favorites,{
        headers:{'Authorization': `Bearer ${accessToken}`}
      } )
    }

   
 
}
