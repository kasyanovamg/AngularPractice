import { Component, OnInit } from '@angular/core';
import {Course} from '../course/course.component';

const coursesList = [
  {
    id: 'first',
    title: 'First Course',
    creation: '01.01.21',
    duration: '50 min',
    description: 'Very good course',
  },
  {
    id: 'second',
    title: 'Second Course',
    creation: '02.02.21',
    duration: '35 min',
    description: 'Another good course',
  }
];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  constructor() {
    this.courses = [];
  };

  public courses: Array<Course | undefined> | any;  // todo: fix the type
  public placeholder = "Search course";

  ngOnInit(): void {
    this.courses =  coursesList;
  }

  public onChange(event: any): void {
    console.log(event)
  }

  public onClick(): void {
    console.log("hi")
  }

  public onRootDelete(id: string): void {
    this.courses = this.courses.find((item?: Course) => item?.id !== id);
  }

}
