import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-exam-results',
  templateUrl: './exam-results.component.html',
  styleUrls: ['./exam-results.component.css']
})
export class ExamResultsComponent implements OnInit {

  data = [];
  role = "";
  

  constructor(private http: HttpService,  private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.role = this.route.snapshot.queryParamMap.get('role');
    this.register();
  }

  delete(id) {
    id = id.replace(",", "/");
    console.log(id);
    this.http.delRequest("examresults/"+id).subscribe(
      res => window.location.reload(),
      err => window.location.reload()
    );
  }

  register() {
    this.http.getRequest("examresults").subscribe(
      
      res => {
        console.log(res);
        this.data = res;
        this.data = this.data.sort((a, b) => {
          if (a['Semester'] > b['Semester']) 
            return 1;
          else if(a['Semester'] === b['Semester']) 
            return a['Student ID'] == b['Student ID'] ? -1:1
          else
            return -1;
          // return (a['Semester'] - b['Semester']);
        })
        console.log(this.data);
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
