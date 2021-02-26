import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css'],
})
export class StyleComponent implements OnInit {
  @Input() color = 'blue';
  @Input() bgColor = 'black';
  size = '25px';

  constructor() {}

  ngOnInit(): void {}

  changeSize(newSize: string): void {
    this.size = newSize + 'px';
  }
}
