import { KeyValuePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  // inputs =[
  //   {
  //     "formcontrol":"email",
  //     "validation":["required,email"]
  //   },
  //   {
  //     "formcontrol":"pass",
  //     "validation":["required"]
  //   },
  //   {
  //     "formcontrol":"shit",           
  //     "validation":["required"]
  //   },
  // ];

  @Input() inputs = {  }
  errors = {  }

  @Input() getUrl = "";
  @Input() putUrl = "";
  @Input() postUrl = "";
  @Input() isPost = false;
  @Input() title = "Create student account";

  SignupForm:FormGroup;

  constructor(private fb: FormBuilder, private http: HttpService) { }

  ngOnInit(){
    this.SignupForm = this.fb.group({});
    this.http.getRequest(this.getUrl).subscribe(
      res => {
        console.log("Sure", res);
        this.inputs = res;

        for(let input of Object.keys(this.inputs)) {
        // if((input.toUpperCase() === "ID" && this.isPost) )
        //   continue;
          
          console.log("Adding", input);
          let c = new FormControl(this.inputs[input]);
          if(input.toUpperCase() === "ID" )
            c.disable();
          this.SignupForm.addControl(input, c);
        }
      }, 
      err => {
        for(let input of Object.keys(this.inputs)) {
            let c = new FormControl(this.inputs[input]);
            if(input.toUpperCase() === "ID" )
              {
                c.disable();
              }
            this.SignupForm.addControl(input, c);
          }
      }
    )

    this.SignupForm.valueChanges.subscribe(value => this.errors = {})
    // let control = new FormControl('');

     

    console.log(this.SignupForm);
  }

  submit() {
    let json = this.SignupForm.value;

    if(!this.isPost)
      json['Id'] = this.inputs['id'];
      
    console.log(json);

    if(this.isPost) {
      this.http.postRequest(this.putUrl, json).subscribe(
        req => {alert("Success!!")},
        err => this.handleError(err)
      )
    }

    else {
      console.log("Shittt", json);
      this.http.putRequest(this.putUrl, json).subscribe(
        req => {alert("Success!!")},
        err => this.handleError(err)
      )
    }
  }

  handleError(err) 
  {
    for(let item in err['error']['errors'])
    {
      let newItem = item.toLowerCase();

      if(newItem.startsWith("$."))
        {
          newItem = newItem.slice(2);
          this.errors[newItem] = ["Invalid input"];
        }
      else
        this.errors[newItem] = err['error']['errors'][item]; 
    }
    console.log(err);
  }

}
