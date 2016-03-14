export function setFilter(filter) {
  return {
    type: 'SET_FILTER',
    filter
  };
}

export function setInitialState() {
  return {
    type: 'SET_INITIAL_STATE'
  };
}

export function setBookmark(filter) {
  return {
    type: 'SET_BOOKMARK',
    filter
  };
}

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function vote(entry) {
  return {
    meta: {remote: true},
    type: 'VOTE',
    entry
  };
}

export function next() {
  return {
    meta: {remote: true},
    type: 'NEXT'
  };
}

export function restart() {
  return {
    meta: {remote: true},
    type: 'RESTART'
  };
}
