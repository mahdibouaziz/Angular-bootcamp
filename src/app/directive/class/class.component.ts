import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent implements OnInit {
  est = true;
  barca = false;
  milan = false;
  show = true;
  teams = ['est', 'om', 'barca', 'milan'];

  constructor() {}

  ngOnInit(): void {}

  change(theme: string): void {
    if (theme === 'est') {
      this.est = true;
      this.barca = false;
      this.milan = false;
    } else if (theme === 'barca') {
      this.est = false;
      this.barca = true;
      this.milan = false;
    } else {
      this.est = false;
      this.barca = false;
      this.milan = true;
    }
  }
}
