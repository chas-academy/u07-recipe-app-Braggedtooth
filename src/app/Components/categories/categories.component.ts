import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

/**
 * @title Basic grid-list
 */
export class CategoriesComponent implements OnInit {

  categoriesList :any = [];

  truncateString(str :string, num:number) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }

  constructor(private dataService: DataService) { }


  ngOnInit() {

    this.dataService.sendCategoryRequest().subscribe((data)=>{

      this.categoriesList = data


    })


  }
}
