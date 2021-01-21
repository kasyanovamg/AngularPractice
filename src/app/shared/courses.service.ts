import { Injectable } from '@angular/core';
import {Course} from '../course/course.component';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private coursesList = [
    {
      id: '01',
      title: 'First Course',
      creation: 1608989993000,
      duration: 62,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      star: true,
    },
    {
      id: '02',
      title: 'Second Course',
      creation: 1600107193000,
      duration: 35,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    },
    {
      id: '04',
      title: 'Fourth Course',
      creation: 1610647993000,
      duration: 142,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      star: true,
    },
    {
      id: '03',
      title: 'Third Course',
      creation: 1610687993000,
      duration: 84,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    },
    {
      id: '05',
      title: 'Fifth Course',
      creation: 1607969893000,
      duration: 84,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    },
  ];

  private isLoadingCourse: boolean;

  constructor(private http: HttpClient) {
    this.isLoadingCourse = false;
  }

  getCourseList(searchedWord: string = '', sort: string = 'date'): any {
    return this.http.get(`${environment.apiUrl}courses?textFragment=${searchedWord}&sort=${sort}`);
  }

  createCourse(course: Course): void {
    console.log('CREATE COURSE, ', course);
  }

  findCourseById(courseId?: string | null): any {
    return this.http.get(`${environment.apiUrl}courses/${courseId}`);
  }

  updateCourse(course: Course): void {
    console.log('UPDATE COURSE, ', course);
  }

  removeCourse(courseId: string): any {
    if (confirm(`Are you sure you want to delete the course?`)) {
      return this.http.delete(`${environment.apiUrl}courses/${courseId}`);
    }
  }

  setLoading(flag: boolean): boolean {
    this.isLoadingCourse = flag;
    return this.isLoadingCourse;
  }

  getLoadingStatus(): boolean {
    return this.isLoadingCourse;
  }

}
