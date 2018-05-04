import { Component, OnInit, Input } from '@angular/core';
import { UserDTO } from '../../Models/UserDTO';
@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() member: UserDTO;
  constructor() { }

  ngOnInit() {
  }

}
