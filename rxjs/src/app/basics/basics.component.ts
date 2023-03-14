import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss'],
})
export class BasicsComponent {
  observal$ = new Observable((observer) => {
    observer.next('1');
    observer.next('2');
    observer.next('3');
    observer.next('4');
  });

  asyncObserval$ = new Observable((val) => {
    val.next(1);
    setTimeout(() => {
      console.log('using set Timeout for async operation');
      val.next(2);
    }, 1000);
    val.next(3);
    val.next(4);
    val.complete();
  });

  errorObserval$ = new Observable((observer) => {
    observer.next('1');
    observer.next('2');
    observer.error(new Error('Error'));
    observer.next('3');
 
  });

  ngOnInit() {
    this.observal$.subscribe((value) => {
      console.log(value);
    });

    this.asyncObserval$.subscribe((value) => {
      console.log(value);
    },()=>{},() => {
      console.log("compeleted");
      
    });

    this.errorObserval$.subscribe((value) => {
      console.log(value);
    },(error)=>{
      console.log(error);
    });
    
  }
}
