import { SLIDER_DATA_REQUEST,SLIDER_DATA_SUCCESS, SLIDER_DATA_FAIL } from "./sliderConstants";
import initialState from './store';

export const sliderReducer = (
    state = initialState,
    action
  ) => {
    switch (action.type) {
      case SLIDER_DATA_REQUEST:
        return {...state };
      case SLIDER_DATA_SUCCESS:
        return {...state,isPending : false, data: action.payload };
      case SLIDER_DATA_FAIL:
        return {...state,isPending : false, error: action.payload };
      default:
        return state;
    }
  };