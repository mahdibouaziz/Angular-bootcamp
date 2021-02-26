import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Personne } from '../../Model/Personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() personnes: Personne[];
  @Output() sendItem = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  handleClicked(selectedPerson): void {
    this.sendItem.emit(selectedPerson);
  }
}
