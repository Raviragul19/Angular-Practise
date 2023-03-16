import { Component } from '@angular/core';
import {
  bufferTime,
  defer,
  from,
  fromEvent,
  interval,
  Observable,
  of,
  map,
  concatMap,
  scan,
  switchMap,
  throwError,
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  take,
  takeUntil,
  timer,
  debounce,
  audit,
  auditTime,
  distinct,
  distinctUntilKeyChanged,
  first,
  ignoreElements,
  last,
  sample,
  single,
  skip,
  skipWhile,
  throttle,
  throttleTime,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent {
  //creation type operator

  //ajax

  public link = 'https://63f8c4006978b1f91060a05d.mockapi.io/student/table';
  public errorLink =
    'https://63f8c4006978b1f91060a05d.mockapi.io/student/table/error';
  public ajaxRequest$ = ajax(this.link);
  public ajaxJson$ = ajax.getJSON(this.link);
  public ajaxErr$ = ajax.getJSON(this.errorLink);
  public array$: Observable<number> = from([1, 2, 3, 4, 5]);
  public string$: Observable<string> = from('ravi');
  public promise$: Observable<string> = from(
    new Promise<string>((resolve, reject) => {
      resolve('hi');
    })
  );
  public of$: Observable<any> = of('from of method', [1, 2, 3], function hi() {
    console.log('function inside of method');
  });
  public createMethod$: Observable<string> = Observable.create(
    (observer: any) => {
      observer.next('creation method -1 ');
      observer.next('creation method -2 ');
    }
  );
  public defer$: Observable<Date> = defer(() => of(new Date()));
  public source = fromEvent(document, 'click');

  ajax() {
    // value via ajax
    console.log('displaying url details from ajax request');
    this.ajaxRequest$.subscribe((res) => {
      console.log(res);
    });

    //value in json format in ajax
    console.log('displaying url details from ajax request in json format');
    this.ajaxJson$.subscribe((res) => {
      console.log(res);
    });

    //error via ajax
    console.log('displaying url error from ajax request');
    this.ajaxErr$.subscribe(
      (res) => {},
      (error) => {
        console.log(error);
      }
    );
  }

  from() {
    // from method
    console.log('displaying from method result {array of values)');
    this.array$.subscribe((res) => {
      console.log(res);
    });

    //from method string
    console.log('displaying from method result {string of values)');
    this.string$.subscribe((res) => {
      console.log(res);
    });

    //from method promise
    console.log('displaying from method result {promise result})');
    this.promise$.subscribe((res) => {
      console.log(res);
    });
  }

  of() {
    //of method
    console.log('displaying of method result');
    this.of$.subscribe((res) => {
      console.log(res);
    });
  }

  create() {
    //create method
    console.log('displaying create method result');
    this.createMethod$.subscribe((res) => {
      console.log(res);
    });
  }

  defer() {
    //defer method
    console.log(
      'displaying defer method whuich display date/time at the moment of subcribe'
    );
    this.defer$.subscribe((res) => {
      console.log(res);
    });
  }

  fromEvent() {
    //fromEvent method
    console.log('displaying fromEvent method result');
    this.source.subscribe((res) => {
      console.log(res);
    });
  }

  //Transformation Type Operater
  public timeBuffer = interval(100);
  public bufferCount$: Observable<number[]> = this.timeBuffer.pipe(
    bufferTime(1000)
  );
  public mapValues = from([1, 2, 3, 4, 5]);
  public map$: Observable<number> = this.mapValues.pipe(map((key) => key + 10));
  public number$: Observable<number> = of(1, 2, 3, 4);
  public character$: Observable<string> = of('R', 'a', 'v', 'i');
  public mapConcat$ = this.number$.pipe(
    concatMap((value) =>
      this.character$.pipe(map((innerValue) => `${value}${innerValue}`))
    )
  );
  public scan$: Observable<number> = this.number$.pipe(
    scan((acc, value) => acc + value, 0)
  );
  public switchMap$: Observable<string> = this.number$.pipe(
    switchMap((value) =>
      this.character$.pipe(map((innerValue) => `${value}${innerValue}`))
    )
  );

  buffer() {
    console.log('displaying buffer result');
    this.bufferCount$.subscribe((res) => {
      console.log(res);
    });
  }
  //map
  mapValue() {
    console.log('displaying mapValues result');
    this.map$.subscribe((res) => {
      console.log(res);
    });
  }
  //concat
  concatMap() {
    console.log('displaying concatMap result');
    this.mapConcat$.subscribe((res) => {
      console.log(res);
    });
  }
  //scan
  scan() {
    console.log('displaying scan result');
    this.scan$.subscribe((res) => {
      console.log(res);
    });
  }
  //switch Map
  switchMap() {
    console.log('displaying concatMap result');
    this.switchMap$.subscribe((res) => {
      console.log(res);
    });
  }

  //error handaling

  public errorData$ = of(1, 2, 3, 4, 5, 'r');

  errorCatch() {
    console.log('catch error');
    this.errorData$
      .pipe(
        map((n) => {
          if (typeof n === 'string') {
            throw 'string';
          }
          return n;
        }),
        catchError((data) => of('It is a string', 7, 8))
      )
      .subscribe((val) => console.log(val));
  }

  //filteration

  public click$ = fromEvent(document, 'click');
  auditMethod() {
    console.log('Displaying results of auditMethod');
    this.click$
      .pipe(audit((i) => interval(1000)))
      .subscribe((val) => console.log(val)); //it will return
  }

  auditTimeMethod() {
    console.log('Displaying results of auditMethod');
    this.click$.pipe(auditTime(1000)).subscribe((val) => console.log(val)); //it will return
  }

  public num$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7);
  timeDebounce() {
    console.log('Displaying results of timedebounce');
    this.num$.pipe(debounceTime(100)).subscribe((res) => {
      console.log(res);
    });
  }

  public objectValue$: Observable<objValue> = of(
    { id: 1, name: 'Ravi' },
    { id: 2, name: 'Ragul' },
    { id: 3, name: 'Ragul' },
    { id: 4, name: 'Arun' },
    { id: 5, name: 'Saran' }
  );
  distinct() {
    console.log('Displaying results of distinct');
    this.objectValue$
      .pipe(distinct(({ name }) => name))
      .subscribe((val) => console.log(val));
  }

  public distinctUntil$: Observable<number> = from([1, 1, 1, 2, 2, 3, 3, 3, 4]);
  distinctUntilChanged() {
    console.log('Displaying results of distinctUntilChanged');
    this.distinctUntil$
      .pipe(distinctUntilChanged())
      .subscribe((res) => console.log(res));
    this.objectValue$
      .pipe(
        distinctUntilChanged((prev, curr) => {
          return prev.id === curr.id || prev.name === curr.name;
        })
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  distinctUntilKeyChange() {
    console.log('Displaying results of distinctUntilKeyChange');
    this.objectValue$.pipe(distinctUntilKeyChanged('name')).subscribe((res) => {
      console.log(res);
    });
  }

  filterMethod() {
    console.log('Displaying results of filterMethod');
    this.num$
      .pipe(filter((n) => n % 3 === 0))
      .subscribe((val) => console.log(val));
  }

  first() {
    console.log('Displaying results of first');
    this.objectValue$.pipe(first()).subscribe((val) => console.log(val));
  }
  takeMethod() {
    console.log('Displaying results of takeMethod');
    this.num$.pipe(take(3)).subscribe((val) => console.log(val));
  }

  public intervalValue$ = interval(100);
  public timerValue$ = timer(1000);
  takeUntilMethod() {
    console.log('Displaying results of takeUntilMethod');
    this.intervalValue$
      .pipe(takeUntil(interval(1000)))
      .subscribe((val) => console.log(val)); //it will return the value untill 1000ms as from 0 to 8
  }

  debounceMethod() {
    console.log('Displaying results of debounceMethod');
    this.intervalValue$
      .pipe(debounce((i) => interval(i * 10)))
      .subscribe((val) => console.log(val)); //it will return the value
  }

  ignore() {
    console.log('Displaying results of ignore');
    this.num$.pipe(ignoreElements()).subscribe(
      (val) => console.log(val),
      (err) => console.log(err),
      () => console.log('Ignored  element and executed  complete ')
    );
  }

  last() {
    console.log('Displaying results of last');
    this.num$.pipe(last()).subscribe((res) => console.log(res));
  }

  sample() {
    console.log('Displaying results of sample');
    this.intervalValue$
      .pipe(sample(interval(600)))
      .subscribe((res) => console.log(res));
  }
  single() {
    console.log('Displaying results of single');
    this.objectValue$
      .pipe(single((key) => key.name.startsWith('S')))
      .subscribe((val) => console.log(val));
    console.log('Displaying error message of single ');
    this.objectValue$
      .pipe(single((key) => key.name.startsWith('A')))
      .subscribe((val) => console.log(val));
  }
  skip() {
    console.log('Displaying results of skip');
    this.num$.pipe(skip(5)).subscribe((res) => {
      console.log(res);
    });
  }

  public skipWhileData$ = from(['ravi', 'ragul', 'arun']);
  public skipWhile() {
    console.log('Displaying results of skipWhileData');
    this.skipWhileData$
      .pipe(skipWhile((key) => key !== 'ragul'))
      .subscribe((res) => console.log(res));
  }

  throttle() {
    console.log('Displaying results of throttle');
    this.intervalValue$
      .pipe(throttle(() => interval(2000)))
      .subscribe((res) => {
        console.log(res);
      });
  }

  throttleTime() {
    console.log('Displaying results of throttle');
    this.intervalValue$
      .pipe(throttleTime(2000))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
export interface objValue {
  name: string;
  id: number;
}
