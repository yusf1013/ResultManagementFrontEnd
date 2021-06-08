import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exams-u',
  templateUrl: './exams-u.component.html',
  styleUrls: ['./exams-u.component.css']
})
export class ExamsUComponent implements OnInit {

  constructor(    private route: ActivatedRoute    ) { }

  getUrl = "";
  title = "Edit Exam Details";
  action = "edit";
  inputs = {
    "id": 1,
    "semester": 1,
    "name": "Class test 2",
    "marks": 20
  };

  ngOnInit(): void {
    const firstParam: string = this.route.snapshot.queryParamMap.get('id');
    this.getUrl = "exam/" + firstParam;

    this.action = this.route.snapshot.queryParamMap.get('action');
    console.log(this.action);
  }

}
