import { combineReducers } from 'redux';
import postReducer from '../reducers/postReducer'

const rootReducer = combineReducers({
    postList : postReducer
})

export default rootReducer