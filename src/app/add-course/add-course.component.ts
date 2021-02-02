import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {CoursesService} from '../shared/courses.service';
import {Course} from '../course/course.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {lengthValidator} from './validators';

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

  form: FormGroup;

  public id?: string | null;
  public foundCourse?: null | Course;
  public crumbName?: string;

  constructor(private route: ActivatedRoute, private router: Router, private courseService: CoursesService, private fb: FormBuilder) {
    // this.form = new FormGroup({
    //   firstName: new FormControl('', Validators.required)
    // });
    this.form = fb.group({
      title: [this.foundCourse?.name, [Validators.required, lengthValidator(50)]],
      description: [this.foundCourse?.description, Validators.required],
      date: [this.foundCourse?.date, Validators.required],
      duration: [this.foundCourse?.length, Validators.required],
      authors: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.courseService.findCourseById(this.id).subscribe((res: any) => {
      this.foundCourse = res;
    });
    this.crumbName = this.foundCourse?.name || 'New Course';
    console.log(this.foundCourse);
  }


  onSave(): void {
    console.log('Saved');
    this.courseService.updateCourse(this.foundCourse as Course);
   // this.router.navigate(['courses']);
  }

  onCancel(): void {
    console.log('Canceled');
    this.router.navigate(['courses']);
  }

}
