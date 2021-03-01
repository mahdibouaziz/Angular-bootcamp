import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../../Model/Personne';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne;

  constructor(
    private embaucheService: EmbaucheService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  embaucher(): void {
    this.embaucheService.embaucher(this.personne);
  }
  moreInfo(): void {
    const link = ['cv', this.personne.id];
    this.router.navigate(link);
  }
}
