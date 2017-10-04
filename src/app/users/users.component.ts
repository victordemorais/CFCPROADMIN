import { UserModel } from './user.model';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pro-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
constructor(private userService: UserService) {

}
 users: UserModel[];
  ngOnInit() {
    this.userService.users()
    .subscribe(
      users => this.users = users
    );
  }

  editUser(user) {
    console.log(user);
  }

}
