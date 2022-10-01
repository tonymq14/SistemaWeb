import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/dto/user.dto';
import { LoadJsService } from 'src/app/service/load-js.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user?:User;

  constructor(
    private _packJS:LoadJsService,
    private userService:UserService
  ) {
    _packJS.changeJS(['slider'], 'body');
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next:(data)=>{
        this.user=data;
      }
    })
  }

  logout() {
    this.userService.setUser(undefined);
    localStorage.removeItem('user');
  }

}
