import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoriesList :any = [];
  
  constructor(private dataService: DataService) { }

  getRecipes(category:string) {
    this.dataService.getRecipeFromCat(category).subscribe((data)=>{
      console.log(data);
      
    })
    
  }
  ngOnInit() {

    this.dataService.sendCategoryRequest().subscribe((data)=>{
     
      this.categoriesList = data
      console.log(this.categoriesList);
      
    })
  
    
  }
}
