import { Component } from '@angular/core';
import { Details } from './details';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  areas=['Angular','React','Springboot'];
  userDetails=new Details ('','','');

  showdetails(){
    console.log(this.userDetails);
    
  }
}
