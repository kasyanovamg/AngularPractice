import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface Course {
  id: string;
  title: string;
  creation: number;
  duration: number;
  description: string;
  star?: boolean;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})

export class CourseComponent implements OnInit {
  constructor() {
    this.course = {
      id: '',
      title: '',
      creation: 0,
      duration: 0,
      description: '',
      star: false,
    };
    this.isStarShown = false;
  }

  public isStarShown: boolean | undefined;

  @Input()
  public course: Course;

  @Output() public onDelete: EventEmitter<string> = new EventEmitter<string>();
  public color: any;

  ngOnInit(): void {
    this.isStarShown = this.course.star;
    this.color = '';
  }

  public delete(): void {
    console.log('You will delete the course with id: ', this.course.id);

  }

}
