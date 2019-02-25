import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(        private formBuilder: FormBuilder    ) { }

  ngOnInit() {
    console.log("form reg created")

    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required
    ],
      password: ['', Validators.required]
  });
  }

}
