import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  currentRecipe :any= [];
  id: any = ""
  errors :any;
  isFavorite= false
  FavoriteRecipe:object= {}
  constructor(private dataService: DataService,private activateRoute:ActivatedRoute, private backend:BackendService,public router: Router) { }

  
  addFavoriteFunc($id:number,$name:string){
    
  /*  const user= JSON.parse(localStorage.getItem('user')||'{}') */
    this.FavoriteRecipe = {
      recipe_id :$id,
      recipe_name :$name ,
      
     } 
    
     this.backend.addFav(this.FavoriteRecipe).subscribe(
       result=>{
        console.log(result);
       
     },
    error => {
      this.errors = error.error;
    },()=>{
      this.router.navigate(['profile']);
    })
    
  }
  ngOnInit(): void {

   
  
    const getRecipes = (id:number) => {
      this.dataService.getRecipeById(id).subscribe((data)=>{
        console.log(data);
        this.currentRecipe= data;
      })
      
    }

    this.activateRoute.paramMap.subscribe(params=>{
      this.id= params.get('id')
      getRecipes( this.id)
    })

    
  }

}
