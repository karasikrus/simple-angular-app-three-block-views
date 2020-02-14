import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  dataUrl = 'http://localhost:3000/data';
  getData() {
    return this.httpClient.get(this.dataUrl);
  }

  constructor(private httpClient: HttpClient) { }
}
