import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  RecipeList :any = [];
  id:any = ""
  constructor(private dataService: DataService,private activateRoute:ActivatedRoute) { }
 myClicker =()=>{
      console.log('clicked');
      
    }
 
  ngOnInit() {

    /* this.dataService.sendCategoryRequest().subscribe((data)=>{
     
      this.categoriesList = data
      console.log(this.categoriesList);
      
    }) */

  
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
