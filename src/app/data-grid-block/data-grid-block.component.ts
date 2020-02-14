import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-grid-block',
  templateUrl: './data-grid-block.component.html',
  styleUrls: ['./data-grid-block.component.css']
})
export class DataGridBlockComponent implements OnInit {

  @Input() data;
  @Input() isLoaded: boolean;

  constructor() { }

  ngOnInit() {
  }

}
