import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Promise<any> {
    return firstValueFrom(
      this.http.get('https://jsonplaceholder.typicode.com/users')
    );
  }
}
