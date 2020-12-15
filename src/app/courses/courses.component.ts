import { Component, OnInit } from '@angular/core';
import {Course} from '../course/course.component';
import {FilterCourses} from '../filterCoursesPipe';

const coursesList = [
  {
    id: 'first',
    title: 'First Course',
    creation: 1589479993000,
    duration: 62,
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    star: true,
  },
  {
    id: 'second',
    title: 'Second Course',
    creation: 1600107193000,
    duration: 35,
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
  },
  {
    id: 'fourth',
    title: 'Fourth Course',
    creation: 1610647993000,
    duration: 142,
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    star: true,
  },
  {
    id: 'third',
    title: 'Third Course',
    creation: 1610687993000,
    duration: 84,
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
  },
  {
    id: 'fifth',
    title: 'Fifth Course',
    creation: 1607969893000,
    duration: 84,
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
  },
];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  constructor(private filterCourses: FilterCourses) {
    this.courses = [];
    this.courseLength = false;
  }

  public courses: Array<Course | undefined> | any;  // todo: fix the type
  public searchedWord = '';

  public courseLength: boolean;

  ngOnInit(): void {
    this.courses = coursesList;
    this.courseLength = !!this.courses.length;
  }

  public onChange(event: any): void {
    console.log(event);
  }

  public onClick(): void {
    this.courses = this.filterCourses.transform(coursesList, this.searchedWord);
  }

  public onRootDelete(id: string): void {
    this.courses = this.courses.find((item?: Course) => item?.id !== id);
  }

}
