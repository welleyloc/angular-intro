import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  personForm = new FormGroup({
    id:  new FormControl(''),
    name: new FormControl('', Validators.required),
    gender: new FormControl(''),
    age: new FormControl(''),
    phone: new FormControl(''),
    state: new FormControl(''),
    zipcode: new FormControl(''),
    occupation: new FormControl('', Validators.required),
    hourly: new FormControl(''),
  });
  
  showInfo(){
    console.log("ID: " + this.personForm.controls["id"].value),
    console.log("Name: " + this.personForm.controls["name"].value),
    console.log("Gender: " + this.personForm.controls["gender"].value),
    console.log("Age: " + this.personForm.controls["age"].value),
    console.log("Phone: " + this.personForm.controls["phone"].value),
    console.log("State: " + this.personForm.controls["state"].value),
    console.log("ZipCode: " + this.personForm.controls["zipcode"].value),
    console.log("Occupation: " + this.personForm.controls["occupation"].value),
    console.log("Hourly Wage: " + this.personForm.controls["hourly"].value)
    }

  constructor() { }

  ngOnInit() {
  }

}
