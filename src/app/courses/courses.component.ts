import { Component, OnInit } from '@angular/core';
import {Course} from '../course/course.component';

const coursesList = [
  {
    id: 'first',
    title: 'First Course',
    creation: '01.01.21',
    duration: '50 min',
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
  },
  {
    id: 'second',
    title: 'Second Course',
    creation: '02.02.21',
    duration: '35 min',
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
  },
  {
    id: 'third',
    title: 'Third Course',
    creation: '02.02.21',
    duration: '85 min',
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
  },
  {
    id: 'fourth',
    title: 'Fourth Course',
    creation: '02.02.21',
    duration: '35 min',
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
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
  }

  public courses: Array<Course | undefined> | any;  // todo: fix the type
  public placeholder = '';

  ngOnInit(): void {
    this.courses =  coursesList;
  }

  public onChange(event: any): void {
    console.log(event);
  }

  public onClick(): void {
    console.log('You searched for: ', this.placeholder);
  }

  public onRootDelete(id: string): void {
    this.courses = this.courses.find((item?: Course) => item?.id !== id);
  }

}
