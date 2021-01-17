import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface Course {
  id: string;
  name: string;
  date: number;
  length: number;
  description: string;
  isTopRated?: boolean;
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
      name: '',
      date: 0,
      length: 0,
      description: '',
      isTopRated: false,
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
