import {Pipe, PipeTransform} from '@angular/core';
import {Course} from './course/course.component';

@Pipe({
  name: 'OrderBy'
})
export class OrderBy implements PipeTransform {

  transform(values: Array<Course>): Array<Course> {
    return values.sort((a, b) => {
      if (a.creation > b.creation) {
        return 1;
      }
      if (a.creation < b.creation) {
        return -1;
      }
      return 0;
    });
  }
}
