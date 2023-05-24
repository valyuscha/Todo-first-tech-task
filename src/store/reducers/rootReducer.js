import { combineReducers, compose } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createStore } from 'redux'
import { persistStore } from 'redux-persist'
import { todoListReducer } from './todoListReducer'
import { popupsReducer } from './popupsReducer'

const rootReducer = combineReducers({
  todoList: todoListReducer,
  popups: popupsReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todoList']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose)

export const persistor = persistStore(store)