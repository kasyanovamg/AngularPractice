import {ChangeDetectionStrategy, Component, DoCheck, Input, OnInit} from '@angular/core';
import {Course} from '../course/course.component';
import {FilterCourses} from '../filterCoursesPipe';
import {CoursesService} from '../shared/courses.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

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
  public isLoading?: boolean;

  @Input()
  public courses: Array<Course | undefined> | any;  // todo: fix the type


  ngOnInit(): void {
    this.isLoading = !!this.courses?.length;
    this.coursesService.getCourseList()
      .pipe(
        map((res: any) => {
          console.log('map', this.isLoading, res);
          this.isLoading = !!res?.length;
          this.courses = res;
        })
      )
      .subscribe((res: Array<Course>) => {
        // this.courses = res;
        // this.courseLength = !!res.length;
        // this.isLoading = !!this.courses?.length;
        // console.log(1111, this.courses, this.courseLength, this.isLoading);
      });
    // this.coursesService.getCourseList().unsubscribe();
  }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck', this.isLoading);
  //   this.isLoading = !!this.courses?.length;
  // }

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
