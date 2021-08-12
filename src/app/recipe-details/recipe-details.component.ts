import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  currentRecipe :any= [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.sendRandomRequest().subscribe((data)=>{
      this.currentRecipe =data;
    
      console.log(this.currentRecipe);
      
    })
  }

}
