import { combineReducers } from 'redux';
import postReducer from '../reducers/postReducer'
import categoryReducer from '../reducers/categoryReducer'
import modalReducer from '../reducers/modalReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    postList : postReducer,
    categoryList : categoryReducer,
    modal:modalReducer,
    form: formReducer
})

export default rootReducer