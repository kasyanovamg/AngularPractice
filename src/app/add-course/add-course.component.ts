import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  fieldNames = {
    date: 'Date',
    duration: 'Duration',
    authors: 'Authors',
  };

  constructor() { }

  ngOnInit(): void {
  }


  onSave(): void {
    console.log('Saved');
  }

  onCancel(): void {
    console.log('Canceled');
  }

}
