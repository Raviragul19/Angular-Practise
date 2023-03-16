import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'akitastore';

  constructor(private input: MatDialog) {}
  openDialog(): any {
    const dialogRef = this.input.open(AddComponent, {
      //data: { id: this.id, name: this.name },
      data: {},
    });
  }


  selectedValue: string='';
  foods = [
    {value: 'CSE', viewValue: 'CSE'},
    {value: 'EIE', viewValue: 'EIE'},
    {value: 'IT', viewValue: 'IT'},
  ];
  data(){
    console.log(this.selectedValue);
    
  }
  

  
}
