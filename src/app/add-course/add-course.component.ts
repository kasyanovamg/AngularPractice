import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {CoursesService} from '../shared/courses.service';
import {Course} from '../course/course.component';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  fieldNames = {
    date: 'Date',
    duration: 'Duration',
    authors: 'Authors',
  };

  public id?: string | null;
  public foundCourse?: null | Course;
  public crumbName?: string;

  constructor(private route: ActivatedRoute, private router: Router, private courseService: CoursesService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.courseService.findCourseById(this.id).subscribe((res: any) => {
      this.foundCourse = res;
    });
    this.crumbName = this.foundCourse?.name || 'New Course';
  }


  onSave(): void {
    console.log('Saved');
    this.courseService.updateCourse(this.foundCourse as Course);
    this.router.navigate(['courses']);
  }

  onCancel(): void {
    console.log('Canceled');
    this.router.navigate(['courses']);
  }

}
