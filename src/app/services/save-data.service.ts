import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {

  sendData(data) {
    console.log(data);
  }

  constructor() { }
}
