import {
  createReducer,
  MetaReducer,
  on,
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {logout, userLoaded} from './authActions';
import {getCourses, isLoaded, loadCourses} from './coursesActions';

export interface State {
  auth: any;
  courses: Array<any>;
}

export const initialState = {
  auth: null,
  courses: [],
};

const authReducer: any = createReducer(null,
  on(userLoaded, (state: any, action: any) => {
    return action?.payload;
  }),
  on(logout, (state: any, action: any) => {
    return null;
  })
  )
;

export const authReducers = (state: State, action: any) => {
  return authReducer(state, action);
};

const coursesReducer: any = createReducer(null,
  on(getCourses, (state: any, action: any) => action?.payload),
);

export const coursesReducers = (state: State, action: any) => {
  return coursesReducer(state, action);
};

const coursesLoadedReducer: any = createReducer(false,
  on(isLoaded, (state: any, action: any) => action?.payload),
);

export const coursesLoadingReducers = (state: State, action: any) => {
  return coursesLoadedReducer(state, action);
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];




