import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {concatMap, map} from 'rxjs/operators';
import {CoursesService} from '../shared/courses.service';
import {getCourses, loadCourses, isLoaded, deleteCourse} from '../+store/coursesActions';


@Injectable()
export class CoursesEffects {

  constructor(private actions$: Actions, private coursesService: CoursesService) {
  }

  @Effect()
  loadCourses$ = createEffect(() => {
      return this.actions$
        .pipe(
          ofType(loadCourses),
          concatMap((res) => this.coursesService.getCourseList(res)),
          map((payload: any) => {
            return getCourses({payload});
          }),
        );
    }
  );

  @Effect()
  isCoursesLoaded$ = createEffect(() => {
      return this.actions$
        .pipe(
          ofType(getCourses),
          map((payload: any) => {
            return isLoaded({payload: true});
          }),
        );
    }
  );

  @Effect()
  deleteCourse$ = createEffect(() => {
      return this.actions$
        .pipe(
          ofType(deleteCourse),
          concatMap(({id}) => this.coursesService.removeCourse(id)),
          map((payload: any) => loadCourses({searchedWord: '', sort: 'date'})),
        );
    }
  );
}

