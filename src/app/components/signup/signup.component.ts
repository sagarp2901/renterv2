import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  termsOfUse = 'By clicking the Sign Up button below, you agree to our Terms of Service and Privacy Policy.';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.router.navigateByUrl('/home');
  }

}
