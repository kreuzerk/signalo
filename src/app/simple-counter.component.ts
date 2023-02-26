import {Component, computed, effect, signal} from "@angular/core";

@Component({
  selector: 'simple-counter',
  template: `
    <h1>Current count: {{count()}}</h1>
    <h2>Double count: {{doubleCount()}}</h2>
    <span>{{getRandomNumber()}}</span>
    <button (click)="incrementCount()">Update count</button>
    <button (click)="logSomething()">Click me</button>
  `,
  standalone: true
})
export class SimpleCounterComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  private t = effect(() => this.logCount());

  logCount() {
    console.log('count changed to', this.count());
  }

  incrementCount() {
    this.count.set(this.count() + 1);
  }

  logSomething(){
    console.log('something');
  }

  getRandomNumber() {
    return Math.random();
  }
}
