import { combineReducers, legacy_createStore, applyMiddleware } from 'redux'
import { productReducer } from './ProductsReducer/reducer'
import { authReducer } from './AuthReducer/reducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({ productReducer, authReducer })

export const store = legacy_createStore(reducer, applyMiddleware(thunk))