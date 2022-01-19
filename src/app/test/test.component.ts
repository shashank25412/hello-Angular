import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  template: `<div>
              test works!
            </div>`,
  styles: [`
            div{
              color: green;
            }
          `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
