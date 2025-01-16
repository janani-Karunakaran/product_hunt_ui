import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges
  } from "@angular/core";
  import { Joke } from "./joke.model";
  
  @Component({
    selector: "joke",
    template: `
      <div class="card">
        <div class="card-body">
          <ng-content></ng-content>
          <h4 class="card-title">
            <ng-content select=".setup"></ng-content>
          </h4>
          <p class="card-text" [hidden]="data.hide">
            <ng-content select=".punchline"></ng-content>
          </p>
          <button class="btn btn-warning" (click)="data.toggle()">Tell me</button>
        </div>
      </div>
    `,
    styles: [".card {margin-top: 16px;}"]
  })
  export class JokeComponent
    implements OnChanges,
      OnInit,
      DoCheck,
      AfterContentInit,
      AfterContentChecked,
      AfterViewInit,
      AfterViewChecked,
      OnDestroy {
    @Input("joke") data: Joke;
  
    constructor() {
      console.log(`new - data is ${this.data}`);
    }
  
    ngOnChanges(changes: SimpleChanges) {
      console.log(`ngOnChanges - data is ${this.data}`);
  
      for (let key in changes) {
        const change = changes[key];
        console.log(`${key} changed.
        Current: ${JSON.stringify(change.currentValue)}).
        Previous: ${JSON.stringify(change.previousValue)})
        `);
      }
    }
  
    ngOnInit() {
      console.log(`ngOnInit  - data is ${this.data}`);
    }
  
    ngDoCheck() {
      console.log("ngDoCheck");
    }
  
    ngAfterContentInit() {
      console.log("ngAfterContentInit");
    }
  
    ngAfterContentChecked() {
      console.log("ngAfterContentChecked");
    }
  
    ngAfterViewInit() {
      console.log("ngAfterViewInit");
    }
  
    ngAfterViewChecked() {
      console.log("ngAfterViewChecked");
    }
  
    ngOnDestroy() {
      console.log("ngOnDestroy");
    }
  }
  