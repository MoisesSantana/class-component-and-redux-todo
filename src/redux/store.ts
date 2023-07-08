import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from './tasks.reducer';

const store = createStore(tasksReducer, applyMiddleware(thunk));

export default store;