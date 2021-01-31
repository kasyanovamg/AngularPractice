import {Component, OnInit} from '@angular/core';
import {Course} from '../course/course.component';
import {FilterCourses} from '../filterCoursesPipe';
import {CoursesService} from '../shared/courses.service';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {debounceTime, filter} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {deleteCourse, isLoaded, loadCourses} from '../+store/coursesActions';
import {selectUserName} from '../user/user.selectors';
import {selectCourseLength, selectCourses, selectCoursesStatus} from './courses.selectors';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})

export class CoursesComponent implements OnInit {

  constructor(
    private filterCourses: FilterCourses,
    private coursesService: CoursesService,
    private router: Router,
    private store: Store<any>) {
  }

  public searchedWord = '';
  public selectCourseLength$?: Observable<boolean>;
  public isLoading$?: any;
  public courses$: Array<Course | undefined> | any;  // todo: fix the type

  subject = new Subject();

  ngOnInit(): void {
    this.courses$ = this.store.pipe(select(selectCourses));
    this.isLoading$ = this.store.pipe(select(selectCoursesStatus));
    this.selectCourseLength$ = this.store.pipe(select(selectCourseLength));
    this.getCourses();
  }

  private getCourses(word: string = ''): void {
    this.store.dispatch(isLoaded({payload: false}));
    this.store.dispatch(loadCourses({searchedWord: word, sort: 'date'}));
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
    this.subject.pipe(
      filter((text: any) => text.length > 2),
      debounceTime(1000),
    ).subscribe((v: any) => this.getCourses(v));
    this.subject.next(value);
  }

  public onRootDelete(id: string): void {
    this.store.dispatch(isLoaded({payload: false}));
    this.store.dispatch(deleteCourse({id}));
  }

}
