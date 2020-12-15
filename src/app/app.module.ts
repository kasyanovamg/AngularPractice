import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HeaderModule} from './header/header.module';
import { CourseComponent } from './course/course.component';
import {CoursesComponent} from './courses/courses.component';
import { UserComponent } from './user/user.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import {BorderColorDirective} from './borderColorDirective';
import {CreationDatePipe} from './creationDatePipe';
import {OrderBy} from './orderByPipe';
import {FilterCourses} from './filterCoursesPipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CoursesComponent,
    CourseComponent,
    UserComponent,
    BreadcrumbsComponent,
    BorderColorDirective,
    CreationDatePipe,
    OrderBy,
    FilterCourses,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FormsModule,
  ],
  providers: [FilterCourses],
  bootstrap: [AppComponent]
})
export class AppModule { }
