import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PeopleListComponent } from '../people-list/people-list.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  
})

export class FormComponent {
  public peopleForm: FormGroup;
  public dataList: any[] = [];
  constructor() {
    this.peopleForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      lastName: new FormControl(''),
      position: new FormControl(''),
      salary: new FormControl(''),
    });
  }
  submitPerson() {
    const formData = this.peopleForm.value;
    this.dataList.push(formData);
    this.peopleForm.reset();
  }
}
