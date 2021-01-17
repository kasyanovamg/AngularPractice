import {Pipe, PipeTransform} from '@angular/core';
import {Course} from './course/course.component';

@Pipe({
  name: 'FilterCourses'
})

export class FilterCourses implements PipeTransform {
  transform(courses: Array<Course>, value: string): Array<Course> {
    return value ? courses.filter(course => course.name.toLowerCase().includes(value.toLowerCase())) : courses;
  }
}
