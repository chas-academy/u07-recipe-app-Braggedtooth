import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/shared/auth.service';


// User interface
export class User {
  name: String ="";
  email: String ="";
  favorites = {
    
  }
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
 UserProfile: User = new User;
  favorites:any = [];
  title:any ='back'
  deleteFav($id:string){
    return $id
  }
  newList(){
    return this.title =prompt('enter title')
   

  }
  constructor(
    public authService: AuthService
  ) {
  
    this.authService.profileUser().subscribe((data:any) => {
      this.UserProfile = data.user.original;
      this.favorites =data.favorites;
    })
     /*  this.UserProfile = JSON.parse(localStorage.getItem('user' )||'{}'); */
    
  }

  ngOnInit() { }

}