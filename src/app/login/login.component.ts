import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  error = {};

  constructor(private fb: FormBuilder, private auth: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: [''],
      password: [''],
    });

    // this.myForm.valueChanges.subscribe(console.log);

  }

  login() {
    // this.auth.userType().subscribe(
    //   res => {},
    //   err => console.log(err),
    // );
    this.auth.login(this.myForm.value).subscribe(
      res => {
        console.log("Token here");
        console.log(res.token);
        let role = JSON.parse(atob(res.token.split('.')[1]))['role'];

        localStorage.setItem('token', res.token);
        
        if(role === "Admin")
          this.router.navigate(['admin']);
        else if(role === "Student")
          this.router.navigate(['student']);
      },
      err => {
        console.log("ds");
        console.log(err);
        this.error = err['error']['errors'];

      },
    );
    console.log(this.myForm.value);
  }

}
