import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-liste2',
  templateUrl: './liste2.component.html',
  styleUrls: ['./liste2.component.css'],
})
export class Liste2Component implements OnInit {
  @Input() personnes: Personne[];
  @Output() grabedPersonne = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  sendPersonne(personne): void {
    this.grabedPersonne.emit(personne);
  }
}
