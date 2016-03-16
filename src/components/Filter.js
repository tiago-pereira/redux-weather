import React from 'react';
import { fetchTemperatureIfNeeded } from '../actions'
import Select from 'react-select';

import AppBar from 'material-ui/lib/app-bar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import SelectField from 'material-ui/lib/select-field';
import RaisedButton from 'material-ui/lib/raised-button';
import { connect } from 'react-redux'

const style = {
  "margin-bottom": 12,
};

class Filter extends React.Component {

  constructor(props) {
    super(props);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }

  handleRefreshClick(e) {
    e.preventDefault()

    let filter = {
      estado: this.selectedState,
      cidade: this.selectedCity
    }

    this.props.dispatch(fetchTemperatureIfNeeded(filter))
  }

  handleStateChange(value) {
    this.selectedState = value.value;

    this.forceUpdate();
  }

  handleCityChange(value) {
    this.selectedCity = value.value;

    this.forceUpdate();
  }

  render() {
    let defaultState = 'SP';
    let defaultCity = 'São Paulo';

    let cities = this.props.data.cities[this.selectedState];

    return (
      <Card className="card">
        <CardHeader
        title="Selecione seu estado e cidade"
        subtitle=""
        actAsExpander={true}
        showExpandableButton={true}/>
        <CardText expandable={true}>

          <Select style={style}
            name="form-field-name"
            value={this.selectedState}
            options={this.props.data.states}
            onChange={this.handleStateChange}
          />

          <Select style={style}
            name="form-field-name"
            value={this.selectedCity}
            options={cities}
            onChange={this.handleCityChange}
          />

          <a
            onClick={this.handleRefreshClick}>
            Atualizar
          </a>
        </CardText>
      </Card>);
  }
}

/*
Filter.propTypes = {
  filter: React.PropTypes.shape({
    estado: React.PropTypes.string,
    cidade: React.PropTypes.string
  })
}
*/

/*function mapStateToProps(state) {
  const { filter } = state;

  return {
    filter
  }
}*/

export default connect()(Filter)//connect(mapStateToProps)(Filter)
