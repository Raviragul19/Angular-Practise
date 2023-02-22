import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  info1: string[] = ['ravi', 'e1', 'ravi@getNgModuleById.com'];
  info2: string[] = ['ragul', 'e2', 'ragul@getNgModuleById.com'];
  info3: string[] = ['arun', 'e3', 'arun@getNgModuleById.com'];

  getInfo1() {
    return this.info1;
  }
  getInfo2() {
    return this.info2;
  }
  getInfo3() {
    return this.info3;
  }
  constructor() {}
}
