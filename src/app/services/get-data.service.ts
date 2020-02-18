import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  dataUrl = environment.apiUrl + '/data';
  getData() {
    return this.httpClient.get(this.dataUrl);
  }

  constructor(private httpClient: HttpClient) { }
}
