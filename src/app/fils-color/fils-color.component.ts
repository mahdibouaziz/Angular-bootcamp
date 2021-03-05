import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-fils-color',
  templateUrl: './fils-color.component.html',
  styleUrls: ['./fils-color.component.css'],
})
export class FilsColorComponent implements OnInit {
  @Input() filsProperty;
  @Output() sendRequestToData = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    // console.log('fils component:', this.filsProperty);
  }
  sendEvent() {
    this.sendRequestToData.emit('test tif this works');
  }
}
