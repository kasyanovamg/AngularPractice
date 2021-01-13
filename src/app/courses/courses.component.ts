import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Course} from '../course/course.component';
import {FilterCourses} from '../filterCoursesPipe';
import {CoursesService} from '../shared/courses.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesComponent implements OnInit {

  constructor(private filterCourses: FilterCourses, private coursesService: CoursesService, private router: Router) {
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

  public onEdit(id: string): void {
    this.router.navigate(['courses', id]);
  }

  public onAdd(): void {
    this.router.navigate(['courses/new']);
  }

  public onClick(): void {
    this.courses = this.filterCourses.transform(this.coursesService.getCourseList(), this.searchedWord);
  }

  public onRootDelete(id: string): void {
    this.coursesService.removeCourse(id);
    this.courses = this.coursesService.getCourseList();
  }

}
