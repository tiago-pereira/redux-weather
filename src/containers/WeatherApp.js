import statesCities from '../data/states-cities.json'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectFilter, fetchTemperatureIfNeeded } from '../actions_creator';

import Filter from '../components/Filter';
import AppNavBar from '../components/AppNavBar';
import Temperature from '../components/Temperature';

export default class WeatherApp extends Component {

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
      <Filter cities={[]} data={ statesCities }/>
      <Temperature/>
    </div>);
  }
}
