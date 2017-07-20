import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-combineall',
  templateUrl: './combineall.component.html',
  styleUrls: ['./combineall.component.css']
})
export class CombineallComponent implements OnInit {

  constructor() { }
  //http://rxmarbles.com/#combineLatest
  //Combile all nearest siblings of other till next not appear
  ngOnInit() {
    const source = Observable.interval(1000).take(2);
    //map each emitted value from source to interval observable that takes 5 values
    const example = source.map(val => {
     console.log("val",val);
     return Observable.interval(500*(val+1)).map((i) => {
         console.info("val , i",val,i);
         return `Result (${val}): ${i}`;
      }).take(5);
    });

    console.log("Example:",example);
    /*
      2 values from source will map to 2 (inner) interval observables that emit every 1s
      combineAll uses combineLatest strategy, emitting the last value from each
      whenever either observable emits a value
    */
    const combined = example.combineAll();
    /*
  output:
  ["Result (0): 0", "Result (1): 0"]
  ["Result (0): 1", "Result (1): 0"]
  ["Result (0): 1", "Result (1): 1"]
  ["Result (0): 2", "Result (1): 1"]
  ["Result (0): 2", "Result (1): 2"]
  ["Result (0): 3", "Result (1): 2"]
  ["Result (0): 3", "Result (1): 3"]
  ["Result (0): 4", "Result (1): 3"]
  ["Result (0): 4", "Result (1): 4"]
*/
const subscribe = combined.subscribe(val => console.log(val));
  }

}
