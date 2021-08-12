import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  categoriesList :any = [];
  
  constructor(private dataService: DataService) { }

 
  ngOnInit() {

    this.dataService.sendCategoryRequest().subscribe((data)=>{
     
      this.categoriesList = data
      console.log(this.categoriesList);
      
    })
  
    
  }
 

}
