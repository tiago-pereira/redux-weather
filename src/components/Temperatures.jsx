import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import SelectField from 'material-ui/lib/select-field';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner')
  };
}

connect(mapStateToProps)(Temperature);

export default class Temperatures extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="app-container">
      <AppNavBar/>
      <Filter/>
    </div>);
  }
}
