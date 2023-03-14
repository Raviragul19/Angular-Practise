import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface addType {
  id: number;
  city: string | null | undefined;
  name: string | null | undefined;
}

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
    return this.http.post(this.url, details);
  }
  editData(details: any) {
    return this.http.put(`${this.url}/${details.id}`, details);
  }
  deleteData(details: any) {
    return this.http.delete(`${this.url}/${details}`, details);
  }
}
