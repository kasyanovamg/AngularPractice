import {createAction, props} from '@ngrx/store';

export const login = createAction('[ auth ] login', props<{ login: string; password: string }>());
export const getUser = createAction('[ auth ] get user info');

export const userLoaded = createAction('[ auth ] user loaded', props<{ payload: any }>());
export const userLoggedIn = createAction('[ auth ] user logged in', props<{ payload: any }>());

export const logout = createAction('[ auth ] logout');
