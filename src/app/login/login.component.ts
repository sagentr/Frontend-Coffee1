import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup  } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dummyForm: FormGroup;


  constructor() { }

  
  ngOnInit() {
    // This is the javascript object that comprises the form
        this.dummyForm = new FormGroup({
          'name': new FormControl(null),  
          'location': new FormControl(null, Validators.required),
          'age': new FormControl(null, Validators.required),
          'bio': new FormControl(null, Validators.required),
          'test': new FormControl(null, Validators.required),
        });
  }

  onSubmit() {
   console.log(this.dummyForm)
  }


}
