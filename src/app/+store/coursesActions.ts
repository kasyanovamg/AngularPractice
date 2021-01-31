import {createAction, props} from '@ngrx/store';

export const loadCourses = createAction('[ courses ] load courses', props<{ searchedWord: string; sort: string }>());
export const isLoaded = createAction('[ courses ] courses loaded', props<{ payload: any }>());
export const getCourses = createAction('[ courses ] get courses', props<{ payload: any }>());

export const deleteCourse = createAction('[ courses ] delete course', props<{ id: string }>());
