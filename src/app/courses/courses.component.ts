import {Component, OnInit} from '@angular/core';
import {Course} from '../course/course.component';
import {FilterCourses} from '../filterCoursesPipe';
import {CoursesService} from '../shared/courses.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})

export class CoursesComponent implements OnInit {

  constructor(private filterCourses: FilterCourses, private coursesService: CoursesService, private router: Router) {
    this.courseLength = false;
    this.isLoading = this.coursesService.getLoadingStatus();
  }

  public searchedWord = '';
  public courseLength: boolean;
  public isLoading?: boolean;
  public courses: Array<Course | undefined> | any;  // todo: fix the type

  subject = new Subject();

  ngOnInit(): void {
    this.getCourses();
    this.subject.pipe(
      filter((text: any) => text.length > 2),
      debounceTime(1000),
    ).subscribe((v: any) => this.getCourses(v));
  }

  private getCourses(word: string = ''): void {
    this.coursesService.setLoading(false);
    this.coursesService.getCourseList(word, 'date')
      .subscribe((res: Array<Course>) => {
        this.coursesService.setLoading(true);
        this.courseLength = !!res?.length;
        this.courses = res;
        this.isLoading = this.coursesService.getLoadingStatus();
      });
  }

  public onEdit(id: string): void {
    this.router.navigate(['courses', id]);
  }

  public onAdd(): void {
    this.router.navigate(['courses/new']);
  }

  public onClick(): void {
    this.getCourses();
  }

  public onChange(event: any): any {
    const value = event.target.value;
    this.subject.next(value);
  }

  public onRootDelete(id: string): void {
    this.coursesService.removeCourse(id).subscribe();

    this.coursesService.setLoading(false);
    this.coursesService.getCourseList(this.searchedWord, 'date')
      .subscribe((res: Array<Course>) => {
        this.courses = res;
        this.courseLength = !!res.length;
        this.coursesService.setLoading(true);
        this.isLoading = this.coursesService.getLoadingStatus();
      });
  }

}
