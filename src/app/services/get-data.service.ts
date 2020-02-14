import { Injectable } from '@angular/core';
import install_history from '../../assets/install_history.json';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  getData() {
    return install_history;
  }

  constructor() { }
}
