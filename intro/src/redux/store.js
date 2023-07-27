import {combineReducers, legacy_createStore} from "redux";
import coursesReducer from "./coursesReducer";
import formReducer from './formReducer';


function configureStore(state) {
    return legacy_createStore(
        combineReducers({
          courses: coursesReducer,
          form: formReducer
         // ....
         // ....   
        })
        );
}

export default configureStore;