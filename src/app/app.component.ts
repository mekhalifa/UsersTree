import { User } from './shared/models/user';
import { Component } from '@angular/core';
import { UserService } from './shared/services/users/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UsersTree';
  UserDataList!:User[] ;

  constructor(private userService :UserService){

    userService.GetUsersData().subscribe(result => {
      this.UserDataList =result;

      console.log(result)
    });
  }
}
