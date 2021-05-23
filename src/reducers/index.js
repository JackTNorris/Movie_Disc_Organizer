import {combineReducers} from 'redux';

import MovieCollectionReducer from './MovieCollectionReducer';
import MovieReducer from './MovieReducer';
import SettingsReducer from './SettingsReducer';
export default combineReducers({
  collection: MovieCollectionReducer,
  allMovies: MovieReducer,
  settings: SettingsReducer,
});
