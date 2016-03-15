import fetch from 'isomorphic-fetch'

export const REQUEST_TEMPERATURE = 'REQUEST_TEMPERATURE'
export const RECEIVE_TEMPERATURE = 'RECEIVE_TEMPERATURE'
export const SELECT_FILTER = 'SELECT_REDDIT'

export function selectFilter(filter) {
  return {
    type: SELECT_FILTER,
    filter
  }
}

function requestPosts(filter) {
  return {
    type: REQUEST_TEMPERATURE,
    filter
  }
}

function receivePosts(filter, json) {
  return {
    type: RECEIVE_POSTS,
    filter: filter,
    temperature: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchTemperature(filter) {
  return dispatch => {
    dispatch(requestPosts(reddit))
    return fetch('http://developers.agenciaideias.com.br/tempo/json/${filter.cidade}-${filter.estado}')
      .then(response => response.json())
      .then(json => dispatch(receiveTemperature(filter, json)))
  }
}

export function fetchTemperatureIfNeeded(filter) {
  return (dispatch, getState) => {
    return dispatch(fetchPosts(filter))
  }
}
