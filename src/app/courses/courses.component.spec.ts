import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponent ]
    })
    .compileComponents();
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
    const consoleSpy = spyOn(console, 'log');
    component.onClick();
    expect(consoleSpy).toHaveBeenCalled();
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
    const courses = new CoursesComponent();
    courses.courses = [{id: '1'}, {id: '2'}];
    courses.onRootDelete('1');
    expect(courses.courses).toEqual({id: '2'});
  });
});
