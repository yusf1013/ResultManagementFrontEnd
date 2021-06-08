import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam-results-u',
  templateUrl: './exam-results-u.component.html',
  styleUrls: ['./exam-results-u.component.css']
})
export class ExamResultsUComponent implements OnInit {

  constructor(    private route: ActivatedRoute    ) { }

  getUrl = "";
  postUrl = "";
  title = "Edit Exam Result";
  action = "edit";

  ngOnInit(): void {
    let firstParam: string = this.route.snapshot.queryParamMap.get('id');
    firstParam = firstParam.replace(",", "/");
    this.getUrl = "examresults/" + firstParam;
  }

}
