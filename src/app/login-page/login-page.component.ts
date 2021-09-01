import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  emailField: string = '';
  passwordField: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.emailField && this.passwordField) {
      axios
        .post('https://warm-fjord-88209.herokuapp.com/users', {
          email: this.emailField,
          password: this.passwordField,
        })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          this.router.navigateByUrl('/').then(r => r);
        });
    }
  }

}
