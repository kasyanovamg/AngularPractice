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
  }

  @Input()
  public course: Course;

  @Output() public onDelete: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onEdit: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  public delete(): void {
    this.onDelete.emit(this.course.id);
  }

  public edit(): void {
    this.onEdit.emit(this.course.id);
  }

}
