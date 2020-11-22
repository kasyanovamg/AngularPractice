import {Component, Input, OnInit} from '@angular/core';

export interface Course {
  id: string;
  title: string;
  creation: string;
  duration: string;
  description: string;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})

export class CourseComponent implements OnInit {

  constructor() {
    this.course = {
      id: '',
      title: '',
      creation: '',
      duration: '',
      description: '',
    };
  }

  @Input()
  public course: Course;

  ngOnInit(): void {
  }

}
