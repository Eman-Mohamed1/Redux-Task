import { createStore, applyMiddleware } from "redux";
import { sliderReducer } from './sliderReducer';
import thunk from 'redux-thunk';

const initialState = { isPending : true,  data: [], error : null }



const store = createStore(

    
     sliderReducer,
     initialState,
     applyMiddleware(thunk)
   
);

export default store;
