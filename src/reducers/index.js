import {combineReducers} from 'redux';
import contactReducer from './contactReducer';


// le fait d'affecter les reducer a des ... s'appelle le Mapping
export default combineReducers({
    myContact: contactReducer
})