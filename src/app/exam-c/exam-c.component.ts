import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam-c',
  templateUrl: './exam-c.component.html',
  styleUrls: ['./exam-c.component.css']
})
export class ExamCComponent implements OnInit {

  constructor(    private route: ActivatedRoute    ) { }

  getUrl = "";
  postUrl = "exam";
  title = "Edit Exam Details";
  action = "edit";
  inputs = {
    "id":"dd",
    "marks": 10,
    "semester": 1,
    "name": ""
  };

  ngOnInit(): void {
    const firstParam: string = this.route.snapshot.queryParamMap.get('id');
    this.getUrl = "exam/" + firstParam;

    this.action = this.route.snapshot.queryParamMap.get('action');
    console.log(this.action);
  }

}
