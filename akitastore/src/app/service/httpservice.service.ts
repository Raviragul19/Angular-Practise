import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../studentsdata';
import { addType } from './dataservice.service';

@Injectable({
  providedIn: 'root',
})
export class HttpserviceService {
  public url = 'https://63f8c4006978b1f91060a05d.mockapi.io/student/table';
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.url);
  }
  addData(details: addType) {
    return this.http.post<Students>(this.url, details);
  }
  editData(details: Students) {
    return this.http.put<Students>(`${this.url}/${details.id}`, details);
  }
  deleteData(details: number) {
    return this.http.delete<Students>(`${this.url}/${details}`);
  }
}
