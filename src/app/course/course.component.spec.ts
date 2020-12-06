import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import {By} from '@angular/platform-browser';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit delete once clicked', () => {
    const spy = spyOn(component, 'delete');
    fixture.debugElement.query(By.css('#delete-btn')).triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });

  it('should log a message', () => {
    const consoleSpy = spyOn(console, 'log');
    component.delete();
    expect(consoleSpy).toHaveBeenCalled();
  });
});

// testing as a class
describe('CourseComponent as a class', () => {
  it('should emit delete once clicked', () => {
    const course = new CourseComponent();
    const spy = spyOn(course, 'delete');
    course.delete();
    expect(spy).toHaveBeenCalled();
  });
});
