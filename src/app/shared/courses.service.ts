import { Injectable } from '@angular/core';
import {Course} from '../course/course.component';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private isLoadingCourse: boolean;

  constructor(private http: HttpClient) {
    this.isLoadingCourse = false;
  }

  getCourseList({searchedWord = '', sort = 'date' }: {searchedWord: string; sort: string}): any {
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
