import {Component, OnInit} from '@angular/core';
// @ts-ignore
//import install_history from '../assets/install_history.json';
import {GetDataService} from './services/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private getDataService: GetDataService) {
  }

  JSONData = {};
  title = 'three-block-views';

  ngOnInit() {
    this.JSONData = this.getDataService.getData();
  }

}
