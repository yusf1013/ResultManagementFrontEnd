import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student-info',
  templateUrl: './edit-student-info.component.html',
  styleUrls: ['./edit-student-info.component.css']
})
export class EditStudentInfoComponent implements OnInit {

  constructor(    private route: ActivatedRoute    ) { }

  getUrl = "";

  ngOnInit(): void {
    const firstParam: string = this.route.snapshot.queryParamMap.get('id');
    this.getUrl = "studentdetails/" + firstParam;
  }


}
