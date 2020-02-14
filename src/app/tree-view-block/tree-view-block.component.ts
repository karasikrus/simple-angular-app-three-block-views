import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tree-view-block',
  templateUrl: './tree-view-block.component.html',
  styleUrls: ['./tree-view-block.component.css']
})


export class TreeViewBlockComponent implements OnInit {

  @Input() data;
  @Input() isLoaded: boolean;

  constructor() { }

  ngOnInit() {

  }

}
