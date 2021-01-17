import {Pipe, PipeTransform} from '@angular/core';
import {Course} from './course/course.component';

@Pipe({
  name: 'OrderBy'
})
export class OrderBy implements PipeTransform {

  transform(values: Array<Course>): Array<Course> {
    return values && values.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      }
      if (a.date > b.date) {
        return -1;
      }
      return 0;
    });
  }
}
