import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getMockNotes(): Observable<any> {
    return this.http.get('assets/mock-data/mock-notes.json');
  }
}
