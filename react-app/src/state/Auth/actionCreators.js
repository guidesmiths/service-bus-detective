import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

export const signIn = createAction(actionTypes.SIGN_IN, () => ({}));

export const checkToken = createAction(actionTypes.CHECK_TOKEN);
export const setTokenValidity = createAction(actionTypes.SET_TOKEN_VALIDITY);
