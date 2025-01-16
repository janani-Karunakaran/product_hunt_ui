import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
    <h1>ngOnChanges Example</h1>
    <app-child [data]="arbitraryData"></app-child>
    `
  })
  export class ParentComponent {
    arbitraryData: string = 'initial';
  
    constructor() {
        console.log("In parent constructor")
      setTimeout(() => {
        this.arbitraryData = 'final';
      }, 5000);
    }
  }