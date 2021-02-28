import { Component, OnInit } from '@angular/core';
import { PremierService } from '../premier.service';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css'],
  providers: [PremierService],
})
export class ChildAComponent implements OnInit {
  constructor(private premierService: PremierService) {}

  ngOnInit(): void {
    this.premierService.logger('child a component');
  }
}
