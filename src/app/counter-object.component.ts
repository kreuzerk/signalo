import {Component, computed, effect, OnInit, signal} from "@angular/core";

@Component({
  selector: 'counter-object',
  template: `
    <h1>Current count: {{count().value}}</h1>
    <h2>Double count: {{doubleCount()}}</h2>
    <button (click)="incrementCount()">Update count</button>
  `,
  standalone: true
})
export class CounterObjectComponent implements OnInit {

  count = signal({
    value: 0
  });
  doubleCount = computed(() => this.count().value * 2);

  ngOnInit(): void {
    effect(() => this.logCount());
  }

  logCount() {
    console.log('count changed to', this.count().value);
  }

  incrementCount() {
    this.count.update(state => {
      state.value = state.value + 1;
      return state;
    });
  }


}
