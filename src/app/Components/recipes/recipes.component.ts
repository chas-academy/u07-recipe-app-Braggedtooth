import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  RecipeList :any = [];
  id:any = ""
  defaultList:string= ""
  FavoriteRecipe:object= {}
  constructor(private dataService: DataService,private activateRoute:ActivatedRoute, private backend:BackendService,public router: Router) { }
 getActiveList(){
    const data = sessionStorage.getItem('default')
    if(data){
      this.defaultList = data;
    }

  }
  addFavoriteFunc($id:number,$name:string){

    this.getActiveList()

    this.FavoriteRecipe = {
      recipe_id :$id,
      recipe_name :$name ,
      list_name: this.defaultList,

     }

     this.backend.addFav(this.FavoriteRecipe).subscribe((response=> {
       if(response.hasOwnProperty(400)){
        alert("Please Login to save a favorite")
       }
     })
     )

  }
  ngOnInit() {

    const getRecipes = (category:string) => {
      this.dataService.getRecipeFromCat(category).subscribe((data)=>{
        console.log(data);
        this.RecipeList= data;
      })

    }
    this.activateRoute.paramMap.subscribe(params=>{
      this.id= params.get('id')
      getRecipes( this.id)
    })


  }


}
