import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class2',
  templateUrl: './class2.component.html',
  styleUrls: ['./class2.component.css'],
})
export class Class2Component implements OnInit {
  class1: true;
  class2: false;
  class3: false;

  constructor() {}

  ngOnInit(): void {}
}
