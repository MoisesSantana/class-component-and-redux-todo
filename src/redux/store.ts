import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from './tasks.reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(tasksReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;