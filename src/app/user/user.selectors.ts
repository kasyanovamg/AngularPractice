import {createFeatureSelector, createSelector, Store} from '@ngrx/store';

const selectAuthState = createFeatureSelector('auth');

export const selectUserName = createSelector(selectAuthState, (user) =>  (user as any)?.name?.first);




