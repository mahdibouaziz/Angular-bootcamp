import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  visibility = false;
  constructor(public authentificationService: AuthentificationService) {}

  ngOnInit(): void {}

  logout(): void {
    this.authentificationService.logout();
  }
  show() {
    this.visibility = !this.visibility;
  }
}
