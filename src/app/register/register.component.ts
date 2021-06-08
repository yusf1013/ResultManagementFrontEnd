import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  error = {};

  constructor(private fb: FormBuilder, private auth: AuthServiceService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
    });

    // this.myForm.valueChanges.subscribe(console.log);

  }

  register() {
    this.auth.register(this.myForm.value).subscribe(
      
      res => {
        console.log(res);
        alert("Account created succesfully!");
        // localStorage.setItem('token', res.token);
      },
      err => {
        console.log("ds");
        console.log(err['error']['errors']);
        console.log("ds"); 
        this.error = err['error']['errors'];
      }
        
    );
    // console.log(this.myForm.value);
  }

}
