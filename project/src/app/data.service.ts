import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { editType } from './raw-data.service';

export interface addType {
  id: number;
  native: string | null | undefined;
  name: string | null | undefined;
  picture: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public url = 'https://63f8c4006978b1f91060a05d.mockapi.io/student/list';
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.url);
  }
  addData(details: addType) {
    return this.http.post(this.url, details);
  }
  editData(details: editType) {
    return this.http.put(`${this.url}/${details.id}`, details);
  }
  deleteData(details: any) {
    return this.http.delete(`${this.url}/${details}`, details);
  }
}
