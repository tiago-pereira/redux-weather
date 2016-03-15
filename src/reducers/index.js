import { combineReducers } from 'redux'
import {
  REQUEST_TEMPERATURE, RECEIVE_TEMPERATURE, SELECT_FILTER
} from '../actions'

const initialState = {filter: {cidade: 'Blumenau', estado: 'SC'}};

function selectFilter(state = initialState, action) {
  switch (action.type) {
    case SELECT_FILTER:
      return action.filter
    default:
      return state
  }
}

function temperatures(state = {
  isFetching: false,
  didInvalidate: false,
  temperature: {}
}, action) {
  switch (action.type) {
    case REQUEST_TEMPERATURE:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_TEMPERATURE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        temperature: action.temperature,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectFilter,
  temperatures
})

export default rootReducer
