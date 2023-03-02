import { Component } from '@angular/core';

import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  areas=['Angular','React','Springboot'];

  userDetails=new User('Ravi','ravi@gmail','ravi123');

}
