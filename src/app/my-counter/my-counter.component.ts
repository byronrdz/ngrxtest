import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, maxim, reset } from '../counter.actions';
import * as counterReducer from '../counter.reducer';
import { State, AppState } from '../model';


@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent {
  count$: Observable<State>
  constructor(private store: Store<State>) {
    this.count$ = store.pipe(select(counterReducer.selectorVal))
  }

  increment() {
    this.store.dispatch(increment());
    console.log(this.store);
  }

  maxim() {
    this.store.dispatch(maxim());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/