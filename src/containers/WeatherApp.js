import statesCities from '../data/states-cities.json'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectFilter, fetchTemperatureIfNeeded } from '../actions_creator';

import Filter from '../components/Filter';
import AppNavBar from '../components/AppNavBar';
import Temperature from '../components/Temperature';

var states = {
  states: [
    {name: 'Acre'},
    {name: 'Santa Catarina'}
  ]
};

class WeatherApp extends Component {

  constructor(props) {
    super(props);

    this.applyFilter = this.applyFilter.bind(this);
  }

  applyFilter(filter) {
    this.props.dispatch(applyFilter(filter))
  }

  render() {
    return (
    <div className="app-container">
      <AppNavBar/>
      <Filter data={ statesCities } onFilterApply={this.applyFilter}/>
      <Temperature/>
    </div>);
  }
}

WeatherApp.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  temperature: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedFilter } = state
  const {
    isFetching,
    lastUpdated,
    temperature: temperature
  } =  {
    isFetching: true,
    temperature: {}
  }

  return {
    selectedFilter,
    temperature,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(WeatherApp);
