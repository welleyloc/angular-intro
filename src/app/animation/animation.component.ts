import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

enum State {
  Xsmall = 'Xsmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  Xlarge = 'Xlarge'
}

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('transition', [
      // ...

      state(State.Xsmall, style({
        width: '50px',
        height: '50px',
        opacity: 1.0,
        backgroundColor: 'orange'
      })),

      state(State.Small, style({
        width: '100px',
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'orange'
      })),

      state(State.Medium, style({
        width: '200px',
        height: '200px',
        opacity: 0.6,
        backgroundColor: 'orange'
      })),

      state(State.Large, style({
        width: '300px',
        height: '300px',
        opacity: 0.4,
        backgroundColor: 'orange'
      })),

      state(State.Xlarge, style({
        width: '400px',
        height: '400px',
        opacity: 0.2,
        backgroundColor: 'orange'
      })),

      transition(`${State.Xsmall} <=> ${State.Small}`, animate('0.5s')),
      transition(`${State.Small} <=> ${State.Medium}`, animate('0.5s')),
      transition(`${State.Medium} <=> ${State.Xsmall}`, animate('0.5s')),
      transition(`${State.Large} <=> ${State.Medium}`, animate('0.5s')),
      transition(`${State.Large} <=> ${State.Small}`, animate('0.5s')),
      transition(`${State.Large} <=> ${State.Xsmall}`, animate('0.5s')),
      transition(`${State.Xlarge} <=> ${State.Xsmall}`, animate('0.5s')),
      transition(`${State.Xlarge} <=> ${State.Small}`, animate('0.5s')),
      transition(`${State.Xlarge} <=> ${State.Medium}`, animate('0.5s')),
      transition(`${State.Xlarge} <=> ${State.Large}`, animate('0.5s')),

    ]),
  ]
})
export class AnimationComponent implements OnInit {

  public state = State.Xsmall

  changeState(state: State) {

    this.state = state;

    if (this.state != state) {
      this.state = state;
    } else {
      this.state = state;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
