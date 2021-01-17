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
    this.courseLength = false;
  }

  public searchedWord = '';

  public courseLength: boolean;
  public isLoaded?: boolean;

  @Input()
  public courses: Array<Course | undefined> | any;  // todo: fix the type


  ngOnInit(): void {
    this.coursesService.getCourseList()
      .subscribe((res: Array<Course>) => {
        this.courses = res;
        this.courseLength = !!res.length;
        this.isLoaded = true;
        console.log(1111, this.courses, this.courseLength, this.isLoaded);
      });
  }

  public onEdit(id: string): void {
    this.router.navigate(['courses', id]);
  }

  public onAdd(): void {
    this.router.navigate(['courses/new']);
  }

  public onClick(): void {
    this.coursesService.getCourseList(this.searchedWord, 'date')
      .subscribe((res: Array<Course>) => {
        this.courses = res;
        this.courseLength = !!res.length;
        console.log(1111, this.courses, this.courseLength);
      });
  }

  public onRootDelete(id: string): void {
    this.coursesService.removeCourse(id).subscribe();
    // this.courses = this.coursesService.getCourseList();
    this.coursesService.getCourseList(this.searchedWord, 'date')
      .subscribe((res: Array<Course>) => {
        this.courses = res;
        this.courseLength = !!res.length;
        console.log(1111, this.courses, this.courseLength);
      });
  }

}
