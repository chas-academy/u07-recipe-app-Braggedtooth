import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataservice:DataService) { }
  querryRes:any =[]
  truncateString(str :string, num:number) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }
  searchRecipe(val:string){
    console.log(val);
    this.dataservice.getSearch(val).subscribe(
      result=>{
        this.querryRes =result;
        console.log(this.querryRes);

      }

    )

  }

  ngOnInit(): void {
  }

}
