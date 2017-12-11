import { combineReducers } from 'redux';
import postReducer from '../reducers/postReducer'
import categoryReducer from '../reducers/categoryReducer'

const rootReducer = combineReducers({
    postList : postReducer,
    categoryList : categoryReducer
})

export default rootReducer