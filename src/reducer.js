import {List, Map} from 'immutable';

function setInitialFilter(state, filter) {


  return state.set('filter', Map({
    filter
  }));
}

function vote(state, entry) {
  const currentRound = state.getIn(['vote', 'round']);
  const currentPair = state.getIn(['vote', 'pair']);
  if (currentPair && currentPair.includes(entry)) {
    return state.set('myVote', Map({
      round: currentRound,
      entry
    }));
  } else {
    return state;
  }
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_INITIAL_FILTER':
    return setInitialFilter(state, action.filter);
  case 'VOTE':
    return vote(state, action.entry);
  }
  return state;
}
