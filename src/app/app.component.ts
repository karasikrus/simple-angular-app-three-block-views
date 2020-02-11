import { Component } from '@angular/core';
// @ts-ignore
import install_history from '../assets/install_history.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'three-block-views';
  JSONData = install_history;

}
