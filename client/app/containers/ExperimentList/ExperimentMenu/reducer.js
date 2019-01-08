/*
 *
 * ExperimentDetailMetricPage reducer
 *
 */

import { fromJS } from 'immutable';
import {     LOAD_MENU_PARAMETER,
            LOAD_MENU_PARAMETER_SUCCESS,
            LOAD_MENU_PARAMETER_ERROR,
            SET_COLUMN_TARGET_KEY
    } from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  menuParam: false,
  targetKeys: false
});

function experimentDetailMetricPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MENU_PARAMETER:
      return state
        .set('loading', true)
        .set('error', false)
        .set('projectId', action.projectId)
    case LOAD_MENU_PARAMETER_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('menuParam', action.menuParam.parameter);
    case LOAD_MENU_PARAMETER_ERROR:
      return state.set('loading', false).set('error', action.error);
    case SET_COLUMN_TARGET_KEY:
      return state.set('targetKeys', action.targetKeys);
    default:
      return state;
  }
}

export default experimentDetailMetricPageReducer;
