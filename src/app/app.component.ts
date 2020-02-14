import {Component, OnInit} from '@angular/core';
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
    this.getDataService.getData()
      .subscribe((data) => this.JSONData = data);
  }

}
