import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-final-results',
  templateUrl: './final-results.component.html',
  styleUrls: ['./final-results.component.css']
})
export class FinalResultsComponent implements OnInit {

  data = [];
  finalResults = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
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
        })

        if(this.data.length > 0) {
          var ids = [];
          
          this.data.forEach(element => {
              if(ids.indexOf(element['Student ID']) < 0)
                ids.push(element['Student ID'])
          });

          ids.forEach(id => {
            var x = {};
            x['Student ID'] = id;
  
            this.data.forEach(element => {
                if(x['Student ID'] == element['Student ID'])
                {
                    var col = "semester " + element["Semester"];
                    if(x[col] == null)
                      x[col] = parseInt(element['ObtainedMark']);
                    else
                      x[col] += parseInt(element['ObtainedMark']);
                }
            });
            this.finalResults.push(x);
          });
          console.log(this.finalResults)
        }

        // console.log(this.data);
      },

      err => {
        console.log("err");
        console.log(err);
      }
        
    );
    // console.log(this.myForm.value);
  }

}
