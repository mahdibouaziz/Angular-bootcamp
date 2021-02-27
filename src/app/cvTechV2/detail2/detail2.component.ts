import { Component, Input, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-detail2',
  templateUrl: './detail2.component.html',
  styleUrls: ['./detail2.component.css'],
})
export class Detail2Component implements OnInit {
  @Input() clickedPersonne: Personne;

  constructor() {}

  ngOnInit(): void {}
}
