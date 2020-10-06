import React from 'react';
import { createStore, combineReducers ,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'

import AppNav from './navigation/AppNav';
import mealsReducer from './store/reducers/meals';

const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer ,applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <AppNav/>
    </Provider>
  );
}
