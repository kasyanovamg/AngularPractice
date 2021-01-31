import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectCourses = createFeatureSelector('courses');

export const selectCoursesStatus = createFeatureSelector('isLoaded');

export const selectCourseLength = createSelector(selectCourses, (courses: any) => !!courses?.length);

