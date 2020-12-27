import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import {FilterCourses} from '../filterCoursesPipe';
import {OrderBy} from '../orderByPipe';
import {CoursesService} from '../shared/courses.service';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let pipeSpy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponent, FilterCourses, OrderBy ],
      providers: [FilterCourses, CoursesService],
    })
    .compileComponents();

    pipeSpy = spyOn(FilterCourses.prototype, 'transform');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log a message onChange', () => {
    const consoleSpy = spyOn(console, 'log');
    component.onChange('');
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log a message onClick', () => {
    component.onClick();
    expect(pipeSpy).toHaveBeenCalled();
  });

  it('should call onRootDelete', () => {
    const spy = spyOn(component, 'onRootDelete');
    component.onRootDelete('first');
    expect(spy).toHaveBeenCalledWith('first');
  });
});

