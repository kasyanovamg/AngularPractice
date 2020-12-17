import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import {FilterCourses} from '../filterCoursesPipe';
import {OrderBy} from '../orderByPipe';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let pipeSpy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponent, FilterCourses, OrderBy ],
      providers: [FilterCourses],
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

// testing as a class
describe('CourseComponent as a class', () => {
  it('should return the course once onRootDelete called', () => {
    const filterCoursesPipe = new FilterCourses();
    const courses = new CoursesComponent(filterCoursesPipe);
    courses.courses = [{id: '1'}, {id: '2'}];
    courses.onRootDelete('1');
    expect(courses.courses).toEqual({id: '2'});
  });
});
