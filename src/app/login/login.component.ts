import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(credentials): void {
    this.authentificationService.login(credentials).subscribe(
      (response) => {
        const token = response.id;
        localStorage.setItem('token', token);
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }
}
