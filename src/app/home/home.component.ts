import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthServiceService, private router: Router) { }


  ngOnInit(): void {
    this.init();
  }

  init(): void {
    console.log("In init")
    this.auth.userType().subscribe(
      res => {
        let t = localStorage.getItem('token'); 
        console.log("Token here");
        console.log(t);
        let token = JSON.parse(atob(t.split('.')[1]));
        console.log(token['role']);
        if(token['role'] === "Student")
          this.router.navigate(['student']);
        else if(token['role'] === "Admin")
          this.router.navigate(['admin']);
      },
      err => console.log(err),
    );
  }

}
