import {combineReducers, legacy_createStore} from "redux";
import coursesReducer from "./coursesReducer";
import formReducer from './formReducer';
import creditFormReducer from './creditFormReducer';


function configureStore(state) {
    return legacy_createStore(
        combineReducers({
          courses: coursesReducer,
          form: formReducer,
          creditForm: creditFormReducer
         // ....
         // ....   
        })
        );
}

export default configureStore;