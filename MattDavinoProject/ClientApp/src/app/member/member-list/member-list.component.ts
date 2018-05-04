import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  constructor(private UserService: UserService) { }

  users = [];
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.UserService.RetrieveUsers().subscribe(p => this.users = p, err => console.log(err), () => console.log(this.users));
    console.log(this.users);
  }


}
