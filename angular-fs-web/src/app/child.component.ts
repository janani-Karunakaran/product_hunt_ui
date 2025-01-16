import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <h3>Child Component</h3>
  <p> NgOnChange Ticks: {{ lifecycleNgOnChangeTicks }}</p>
  <p> Ngoninit Ticks : {{lifeCycleNgOnInItTicks}}</p>
  <p>NgDoCheck Ticks : {{lifeCycleNgDoCheck}}</p>
  <p>DATA: {{ data }}</p>
  `
})
export class ChildComponent implements OnChanges, DoCheck, OnInit {
  @Input() data: string;
  lifecycleNgOnChangeTicks: number = 0;
  lifeCycleNgOnInItTicks: number = 0;
  lifeCycleNgDoCheck: number = 0;


  constructor(){
    console.log("In child constructor")

  }

  ngOnChanges() {
    console.log("In child ngOnChanges");
    this.lifecycleNgOnChangeTicks++;
  }

  ngOnInit() {
    console.log("In child ngoninit");
    this.lifeCycleNgOnInItTicks++;
  }

  ngDoCheck(): void {
    console.log("In child ngDoCheck");
    this.lifeCycleNgDoCheck++;
  }
}
