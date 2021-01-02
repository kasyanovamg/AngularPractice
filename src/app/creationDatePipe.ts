import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'CreationDatePipe'
})
export class CreationDatePipe implements PipeTransform {

  transform(value?: number): string {
    if (!value) {
      return '';
    }
    const hours: number = value > 60 ? Math.floor(value / 60) : 0;
    const minutes: number = (value - hours * 60);
    return hours ? `${hours}h ${minutes}min` : `${minutes}min`;
  }
}
