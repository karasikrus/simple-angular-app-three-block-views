import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stack-view-block',
  templateUrl: './stack-view-block.component.html',
  styleUrls: ['./stack-view-block.component.css']
})
export class StackViewBlockComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

  toDate(date: number): Date{
    return new Date(date);
  }

}
