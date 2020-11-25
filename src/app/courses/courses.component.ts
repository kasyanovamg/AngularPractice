import { Component, OnInit } from '@angular/core';
import {Course} from '../course/course.component';

const mockCourseFirst = {
  id: 'first',
  title: 'First Course',
  creation: '01.01.21',
  duration: '50 min',
  description: 'Very good course',
};

const mockCourseSecond = {
  id: 'second',
  title: 'Second Course',
  creation: '02.02.21',
  duration: '35 min',
  description: 'Another good course',
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  public courses: Course[] | undefined;
  public placeholder = "Search course";

  constructor() { }

  ngOnInit(): void {
    this.courses =  [mockCourseFirst, mockCourseSecond];
  }

  public onChange(event: any): void {
    console.log(event)
  }

  public onClick(): void {
    console.log("hi")
  }

}
