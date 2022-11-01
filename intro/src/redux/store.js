import {combineReducers, legacy_createStore} from "redux";
import coursesReducer from "./coursesReducer";
import scheduleReducer from './scheduleReducer';
import formReducer from './formReducer';


function configureStore(state) {
    return legacy_createStore(
        combineReducers({
          courses: coursesReducer,
          schedule: scheduleReducer,
          form: formReducer
         // ....
         // ....   
        })
        );
}

export default configureStore;