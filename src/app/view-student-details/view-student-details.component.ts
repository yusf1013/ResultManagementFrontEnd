import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view-student-details',
  templateUrl: './view-student-details.component.html',
  styleUrls: ['./view-student-details.component.css']
})
export class ViewStudentDetailsComponent implements OnInit {


  data = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.register();
  }

  register() {
    this.http.getStudentDetails().subscribe(
      
      res => {
        console.log(res);
        this.data = res;
        // localStorage.setItem('token', res.token);
      },

      err => {
        console.log("err");
        console.log(err);
      }
        
    );
    // console.log(this.myForm.value);
  }

}
