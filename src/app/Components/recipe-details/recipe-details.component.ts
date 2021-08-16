import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  currentRecipe :any= [];
  id: any = ""
  isFavorite= false
  constructor(private dataService: DataService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.sendRandomRequest().subscribe((data)=>{
      this.currentRecipe =data;
      console.log(this.currentRecipe);
      
    })

 
    
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
