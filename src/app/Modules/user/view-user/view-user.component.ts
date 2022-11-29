import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit {
  public UserList = [];
  constructor(private service:UserService) { }
  
  ngOnInit() {
    this.GetUserDetailsList();
  }

  GetUserDetailsList() {
    this.service.getUserDetails().subscribe(response => {
      console.log(response)
      this.UserList = response;
    });
  }

}
