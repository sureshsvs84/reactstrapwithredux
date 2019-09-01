import { combineReducers } from 'redux';
import { UserDataListReducer } from '../ApplicationComponent/userDataList/userDataListReducer';
import { PostReducer } from './post/postDataList/postReducer';
export default combineReducers({
    UserDataListReducer,
    PostReducer
});