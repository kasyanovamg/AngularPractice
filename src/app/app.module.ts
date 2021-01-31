import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HeaderModule} from './header/header.module';
import {CourseComponent} from './course/course.component';
import {CoursesComponent} from './courses/courses.component';
import {UserComponent} from './user/user.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {BorderColorDirective} from './borderColorDirective';
import {CreationDatePipe} from './creationDatePipe';
import {OrderBy} from './orderByPipe';
import {FilterCourses} from './filterCoursesPipe';
import {CoursesService} from './shared/courses.service';
import {LoginModule} from './login/login.module';
import {AddCourseComponent} from './add-course/add-course.component';
import {DateComponent} from './date/date.component';
import {DurationComponent} from './duration/duration.component';
import {AuthorsComponent} from './authors/authors.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {LoadingBlockComponent} from './loading-block/loading-block.component';
import {authReducers, coursesLoadingReducers, coursesReducers} from './+store';
import {Store, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment.prod';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './login/auth.effects';
import {CoursesEffects} from './courses/courses.effects';

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
    AddCourseComponent,
    DateComponent,
    DurationComponent,
    AuthorsComponent,
    NotFoundComponent,
    LoadingBlockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FormsModule,
    LoginModule,
    HttpClientModule,
    StoreModule.forRoot({auth: authReducers, courses: coursesReducers, isLoaded: coursesLoadingReducers}),
    // Instrumentation must be imported after importing StoreModule (config is optional).
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    [EffectsModule.forRoot([AuthEffects, CoursesEffects])]
  ],
  providers: [FilterCourses, CoursesService, Store],
  bootstrap: [AppComponent]
})
export class AppModule {
}
