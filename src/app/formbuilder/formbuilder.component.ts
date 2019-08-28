import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  userForm = this.builder.group({
    name: [''],
    gender: [''],
    state: ['']
  })

  constructor(private builder: FormBuilder) { } // injecting dependency by adding to the component constructor

  ngOnInit() { }

  submit() {
    console.log(this.userForm.value);
  }

  updateInfo() {
    this.userForm.patchValue({
      name: 'Tom',
      gender: 'male',
      state: 'Michigan',
    })
    console.log(this.userForm.value)
  }
}
