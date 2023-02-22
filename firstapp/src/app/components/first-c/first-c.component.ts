import { Component } from '@angular/core';

@Component({
  selector: 'app-first-c',
  // similary we are declaring via class
  // selector: '.app-first-c'
  templateUrl: './first-c.component.html',
  styleUrls: ['./first-c.component.scss'],
})
export class FirstCComponent {
  public name = 'Raviragul';
  disabled: boolean = false;

  buttonClick(){
    alert('button was clicked')
  }

  typedLength(event: any){
    console.log(event)
  }
  animal:string[] = ['dog','cat','cow','goat'];
  num:number[]=[1,2,3,4];
  public color='pink';
  public message='Welcome to pipes';
  public details={
    'name':'Raviragul',
    'native':'Tiruppur',
    'age':20,
    'gender':'male',
    'height':5.75,
    'weight':55
  };
  public date=new Date();
  
  public dynamicngClass="second";
  changecolor(){
    this.dynamicngClass="third"
  }
}