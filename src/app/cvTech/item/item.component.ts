import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Personne } from '../../Model/Personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() clickedItem = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  sendEvent(): void {
    this.clickedItem.emit(this.personne);
  }
}
