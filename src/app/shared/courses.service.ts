import { Injectable } from '@angular/core';
import {Course} from '../course/course.component';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private coursesList = [
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

  constructor() { }

  getCourseList(): Array<Course> {
    return this.coursesList;
  }

  createCourse(course: Course): void {
    console.log('CREATE COURSE, ', course);
  }

  findCourseById(courseId: string): void {
    console.log('FIND COURSE, ', courseId);
  }

  updateCourse(course: Course): void {
    console.log('UPDATE COURSE, ', course);
  }

  removeCourse(courseId: string): Array<Course> | void {
    if (confirm(`Are you sure you want to delete ${this.coursesList.find(course => course.id === courseId)?.title}?`)) {
      this.coursesList = this.coursesList.filter(course => course.id !== courseId);
      return this.coursesList;
    }
  }

}
