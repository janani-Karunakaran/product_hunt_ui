import { Component } from "@angular/core";

import { Joke } from "./joke.model";

@Component({
  selector: "joke-list",
  template: `
    <joke *ngFor="let j of jokes" [joke]="j">
      <span class="setup">{{j.setup}}</span>
      <div class="punchline">{{j.punchline}}</div>
    </joke>
    <button type="button"
            class="btn btn-success"
            (click)="addJoke()">Add Joke
    </button>
    <button type="button"
            class="btn btn-danger"
            (click)="deleteJoke()">Clear Jokes
    </button>
  `,
  styles: [
    `
    .btn {
      margin-top: 16px !important;
    }
  `
  ]
})
export class JokeListComponent {
  jokes: Joke[] = [];

  constructor() {}

  addJoke() {
    this.jokes.unshift(
      new Joke(
        "What did the cheese say when it looked in the mirror",
        "Hello-me (Halloumi)"
      )
    );
  }

  deleteJoke() {
    this.jokes = [];
  }
}
