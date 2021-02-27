import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style2',
  templateUrl: './style2.component.html',
  styleUrls: ['./style2.component.css'],
})
export class Style2Component implements OnInit {
  color = 'blue';
  bgColor = 'lightgreen';
  fontSize = '50px';

  constructor() {}

  ngOnInit(): void {}
  handleColor(color): void {
    this.color = color;
  }
  changeFontSize(input: string): void {
    this.fontSize = input + 'px';
    console.log(this.fontSize);
  }
}
