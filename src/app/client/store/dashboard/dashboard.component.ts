import { Component, OnInit } from '@angular/core';
import { LoadJsService } from 'src/app/service/load-js.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _packJS:LoadJsService
  ) {
    _packJS.changeJS(['slider'], 'body');
  }

  ngOnInit(): void {
  }

}
