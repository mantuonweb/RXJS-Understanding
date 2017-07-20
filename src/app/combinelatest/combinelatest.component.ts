import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styleUrls: ['./combinelatest.component.css']
})
export class CombinelatestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //timerOne emits first value at 1s, then once every 4s
const timerOne = Observable.timer(1000, 4000).take(4);
//timerTwo emits first value at 2s, then once every 4s
const timerTwo = Observable.timer(2000, 4000).take(4);
//timerThree emits first value at 3s, then once every 4s
const timerThree = Observable.timer(3000, 4000).take(4);

//combineLatest also takes an optional projection function
const combinedProject = Observable
.combineLatest(
    timerOne,
    timerTwo,
    timerThree,
    (one, two, three) => {
      return `Timer One (Proj) Latest: ${one}, 
              Timer Two (Proj) Latest: ${two}, 
              Timer Three (Proj) Latest: ${three}`
    }
);
//log values
const subscribe = combinedProject.subscribe(latestValuesProject => console.log(latestValuesProject));
  }

}
