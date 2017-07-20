import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-concate',
  templateUrl: './concate.component.html',
  styleUrls: ['./concate.component.css']
})
export class ConcateComponent implements OnInit {

  constructor() { }
  result:any[]=[];
  ngOnInit() {
      //emits 1,2,3
      const sourceOne = Rx.Observable.of(1,2,3).delay(2000);
      //emits 4,5,6
      const sourceTwo = Rx.Observable.of(4,5,6).delay(2000);

      //used as static
      const example = Rx.Observable.concat(
          sourceOne,
          sourceTwo
      );
      //output: 1,2,3,4,5,6
      const subscribe = example.subscribe(val => {this.result.push('Example: static'+ val)
        console.log('Example Concate: Delayed source one:', val)
      });
  }

}
