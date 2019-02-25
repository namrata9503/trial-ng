import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(        private formBuilder: FormBuilder    ) { }

  ngOnInit() {
//    this.createForm() ;
    console.log("form login created")

    
  this.loginForm = this.formBuilder.group({
    email: ['', Validators.required
  ],
    password: ['', Validators.required]
});

// get return url from route parameters or default to '/'
// this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  onSubmit() {
    console.log('loginForm' , this.loginForm.value);
  }
}
