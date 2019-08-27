import { combineReducers } from 'redux';
import rootcomponentReducer from './components/rootcomponentReducer';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Need to get the combined reducer
 * our entire applications state (store) is just whatever gets returned from all your reducers
 * */
export default combineReducers({
    rootcomponentReducer   
});