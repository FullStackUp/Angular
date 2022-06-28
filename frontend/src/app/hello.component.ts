import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<div>
    <h2>Hello from {{ name }}</h2>
  </div>`,
  styles: [
    `
      h2 {
        color: green;
      }
    `,
  ],
})
export class HelloComponent {
  name: string;

  constructor() {
    this.name = 'my first component';
  }
}
