import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuerryService {

  private BACKEND_API_URL = 'https://u08recipeapi.herokuapp.com/api/'


  constructor(private HttpClient: HttpClient) {  }
    /**
     * register
     */ 
    
    public register(name:string,email:string, password:string) {
      let formdata = new FormData;
      formdata.append('name',name)
      formdata.append('email',email)
      formdata.append('password',password)
      return this.HttpClient.post(this.BACKEND_API_URL+'/register', formdata)
    }
    public login(email:string, password:string) {
      const formdata = new FormData;
      formdata.append('email',email)
      formdata.append('password',password)
      return this.HttpClient.post(this.BACKEND_API_URL+'/login', formdata)
    }

    public addFav($recipeId:any, token:string) {
      const formdata = new FormData;
      let header = new Headers({ 'Authorization': `Bearer ${token}` });
      formdata.append('recipe_id',$recipeId)
      return this.HttpClient.post(this.BACKEND_API_URL+'/newlist', formdata,{
        headers:{
          "Content-Type": "multipart/form-data",
          
        }
      })
    }

   
 
}
