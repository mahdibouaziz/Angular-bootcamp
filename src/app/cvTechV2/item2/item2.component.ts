import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css'],
})
export class Item2Component implements OnInit {
  @Input() personne: Personne;
  @Output() sendPersonne = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  grabPersonne(): void {
    this.sendPersonne.emit(this.personne);
  }
}
