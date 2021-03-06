import {Component, Input, OnInit} from '@angular/core';
import {SaveDataService} from '../services/save-data.service';

@Component({
  selector: 'app-stack-view-block',
  templateUrl: './stack-view-block.component.html',
  styleUrls: ['./stack-view-block.component.css']
})
export class StackViewBlockComponent implements OnInit {

  editModal = false;

  @Input() data;
  @Input() isLoaded: boolean;

  constructor(private saveDataService: SaveDataService) { }


sendData(data) {
    this.saveDataService.sendData(data)
      .subscribe();
  }

ngOnInit() {
  }



}
