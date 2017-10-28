import {createStore} from 'redux'
import {combineReducers} from 'redux'
import * as reducers from '../reducers'

const rootReducer = combineReducers(reducers)

const exampleInitState = {
    example: false
}

export const makeStore = (initialState = exampleInitState) => createStore(rootReducer, initialState)