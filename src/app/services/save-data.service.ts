import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {
  dataUrl = 'http://localhost:3000/save';

  sendData(data) {
    return this.httpClient.post(this.dataUrl, data);
  }

  constructor(private httpClient: HttpClient) { }
}
