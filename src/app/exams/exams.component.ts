import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  

  data = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.register();
  }

  delete(id) {
    console.log(id);
    this.http.delRequest("exam/"+id).subscribe(
      res => window.location.reload(),
      err => window.location.reload()
    );
  }

  register() {
    this.http.getRequest("exam").subscribe(
      
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
