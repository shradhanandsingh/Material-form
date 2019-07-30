import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  myForm: FormGroup;
  reactiveForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });
  
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('First Name', form.value.fname);
    console.log('Last Name', form.value.lname);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }

}
