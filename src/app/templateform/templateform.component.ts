import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { NgModel, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  
  user: Person = {
    id: null,
    name: '',
    gender: '',
    age: null,
    phoneNumber: '',
    state: '',
    zipCode: null,
    occupation: '',
    hourlyWage: null,
  }

  onSubmit() {
    console.log('ID: ' + this.user.id);
    console.log('Name: ' + this.user.name);
    console.log('Gender: ' + this.user.gender);
    console.log('Age: ' + this.user.age);
    console.log('Phone: ' + this.user.phoneNumber);
    console.log('State: ' + this.user.state);
    console.log('Zip Code: ' + this.user.zipCode);
    console.log('Occupation: ' + this.user.occupation);
    console.log('Hourly Wage: ' + this.user.hourlyWage);
  }

  constructor() { }

  ngOnInit() { }

}