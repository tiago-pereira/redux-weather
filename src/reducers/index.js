import { combineReducers } from 'redux'
import {
  REQUEST_TEMPERATURE, RECEIVE_TEMPERATURE, SELECT_FILTER
} from '../actions'

const initialState = {cidade: 'São Paulo', estado: 'SP'};

function filter(state = initialState, action) {
  switch (action.type) {
    case SELECT_FILTER:
      return action.filter
    default:
      return state
  }
}

function temperatures(state = {
  isFetching: false,
  temperature: {previsoes: []}
}, action) {
  switch (action.type) {
    case REQUEST_TEMPERATURE:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_TEMPERATURE:
      return Object.assign({}, state, {
        isFetching: false,
        temperature: action.temperature,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  filter,
  temperatures
})

export default rootReducer
