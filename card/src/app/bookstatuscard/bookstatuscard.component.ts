import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-bookstatuscard',
  templateUrl: './bookstatuscard.component.html',
  styleUrls: ['./bookstatuscard.component.scss']
})
export class BookstatuscardComponent {
  url:any=''
avatar(){
  this.url=faker.image.avatar()
console.log(this.url)
  
}
}
