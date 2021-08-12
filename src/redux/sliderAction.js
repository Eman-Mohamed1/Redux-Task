import { SLIDER_DATA_REQUEST,SLIDER_DATA_SUCCESS, SLIDER_DATA_FAIL } from "./sliderConstants";
import Axios from 'axios'
export const sliderAction = () => async (dispatch) => {
    dispatch({
      type: SLIDER_DATA_REQUEST
    });
    try {
      const { data } = await Axios.get('http://localhost:3000/Articles');
      dispatch({ type:SLIDER_DATA_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  SLIDER_DATA_FAIL, payload: error.message });
    }
  };