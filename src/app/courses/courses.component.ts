import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Course} from '../course/course.component';
import {FilterCourses} from '../filterCoursesPipe';
import {CoursesService} from '../shared/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesComponent implements OnInit {

  constructor(private filterCourses: FilterCourses, private coursesService: CoursesService) {
    this.courses = [];
    this.courseLength = false;
  }

  public searchedWord = '';

  public courseLength: boolean;

  @Input()
  public courses: Array<Course | undefined> | any;  // todo: fix the type


  ngOnInit(): void {
    this.courses = this.coursesService.getCourseList();
    this.courseLength = !!this.courses.length;
  }

  // ngDoCheck(): void {
  //   this.courses = this.coursesService.getCourseList();
  // }

  public onChange(event: any): void {
    console.log(event);
  }

  public onClick(): void {
    this.courses = this.filterCourses.transform(this.coursesService.getCourseList(), this.searchedWord);
  }

  public onRootDelete(id: string): Array<Course> | void {
    return this.coursesService.removeCourse(id);
  }

}
