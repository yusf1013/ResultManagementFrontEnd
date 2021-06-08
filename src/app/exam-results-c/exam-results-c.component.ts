import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam-results-c',
  templateUrl: './exam-results-c.component.html',
  styleUrls: ['./exam-results-c.component.css']
})
export class ExamResultsCComponent implements OnInit {

  
  constructor(    private route: ActivatedRoute    ) { }

  getUrl = "";
  postUrl = "examresults";
  title = "Add Exam Result";
  action = "edit";
  inputs = {
    "Id":"",
    "studentId": "",
    "examId": 0,
    "obtainedMark": 0
  };

  ngOnInit(): void {
    const firstParam: string = this.route.snapshot.queryParamMap.get('id');
    this.getUrl = "exam/" + firstParam;

    this.action = this.route.snapshot.queryParamMap.get('action');
    console.log(this.action);
  }

}
