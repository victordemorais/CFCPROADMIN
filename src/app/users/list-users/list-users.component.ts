import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';
@Component({
  selector: 'pro-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: UserModel[];
  constructor(private userService: UserService) {

  }

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
