import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface Course {
  id: string;
  title: string;
  creation: string;
  duration: string;
  description: string;
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
      creation: '',
      duration: '',
      description: '',
    };
  }

  @Input() 
  public course: Course;

  @Output() public onDelete: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }
  
  public delete(): void {
    this.onDelete.emit(this.course.id);
  }

}
