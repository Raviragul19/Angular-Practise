import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, of, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
constructor(){
  const  observable$:Observable<number>=of(1,2,3,4);
  observable$.subscribe((res)=>console.log(res)  )

}

subject(){  
  const subject:Subject<number>=new Subject();
  subject.subscribe((res)=>console.log('subject value ' ,res));
  subject.next(1);
  subject.next(2);
  
}

behaviourSubject(){
  const behavior:BehaviorSubject<number> = new BehaviorSubject(0);  //must have initial value
  behavior.subscribe((res)=>console.log('Behaviorsubject value ' ,res));
  behavior.next(1);
  behavior.next(2);
}

replaySubject(){
  const replay:ReplaySubject<number> = new ReplaySubject(1); //specify no of buffer subscribe value
  replay.next(1);
  replay.next(2);
  replay.subscribe((res)=>console.log('Replaysubject value ' ,res));  //it will emit 2,3
  replay.next(3);  
}

asyncSubject(){
  const replay:AsyncSubject<number> = new AsyncSubject(); //specify no of buffer subscribe value
  replay.next(1);
  replay.next(2);
  replay.subscribe((res)=>console.log('Asyncsubject value ' ,res));  //it will emit 2,3
  replay.next(3);  
  replay.complete();
}

}
