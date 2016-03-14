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

export default class WeatherApp extends React.Component {

  constructor(props) {
    super(props);
    console.log('oi');
    this.state = {open: false};
    this.handleToggle = () => this.setState({open: !this.state.open});
  }




  render() {
    return (
    <div className="voting">
            <AppBar title="Weather" onLeftIconButtonTouchTap={this.handleToggle}/>
            <LeftNav open={this.state.open}>
              <AppBar title="Weather" onLeftIconButtonTouchTap={this.handleToggle}/>
              <MenuItem>Menu Item</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
            </LeftNav>
            <Card className="card">
              <CardHeader
              title="Filtro"
              subtitle="Selecione sua cidade"
              actAsExpander={true}
              showExpandableButton={true}/>
              <CardText expandable={true}>
                <SelectField className="estado-select" value={this.state.value} onChange={this.handleChange} floatingLabelText="Estado">
                  <MenuItem value={1} primaryText="Never"/>
                  <MenuItem value={2} primaryText="Every Night"/>
                  <MenuItem value={3} primaryText="Weeknights"/>
                  <MenuItem value={4} primaryText="Weekends"/>
                  <MenuItem value={5} primaryText="Weekly"/>
                </SelectField>
                <SelectField value={this.state.value} onChange={this.handleChange} floatingLabelText="Cidade">
                  <MenuItem value={1} primaryText="Never"/>
                  <MenuItem value={2} primaryText="Every Night"/>
                  <MenuItem value={3} primaryText="Weeknights"/>
                  <MenuItem value={4} primaryText="Weekends"/>
                  <MenuItem value={5} primaryText="Weekly"/>
                </SelectField>
              </CardText>
            </Card>
    </div>);
  }
}
/*
React.createClass({

  getInitialState: function() {
    return {open: false};
  },

  handleToggle: function() {
    this.setState({open: !this.state.open})
  },
  render: function() {
    return <div className="voting">
            <AppBar title="Weather" onLeftIconButtonTouchTap={this.handleToggle}/>
            <LeftNav open={this.state.open}>
              <AppBar title="Weather" onLeftIconButtonTouchTap={this.handleToggle}/>
              <MenuItem>Menu Item</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
            </LeftNav>
            <Card className="card">
              <CardHeader
              title="Filtro"
              subtitle="Selecione sua cidade"
              actAsExpander={true}
              showExpandableButton={true}/>
              <CardText expandable={true}>
                <SelectField className="estado-select" value={this.state.value} onChange={this.handleChange} floatingLabelText="Estado">
                  <MenuItem value={1} primaryText="Never"/>
                  <MenuItem value={2} primaryText="Every Night"/>
                  <MenuItem value={3} primaryText="Weeknights"/>
                  <MenuItem value={4} primaryText="Weekends"/>
                  <MenuItem value={5} primaryText="Weekly"/>
                </SelectField>
                <SelectField value={this.state.value} onChange={this.handleChange} floatingLabelText="Cidade">
                  <MenuItem value={1} primaryText="Never"/>
                  <MenuItem value={2} primaryText="Every Night"/>
                  <MenuItem value={3} primaryText="Weeknights"/>
                  <MenuItem value={4} primaryText="Weekends"/>
                  <MenuItem value={5} primaryText="Weekly"/>
                </SelectField>
              </CardText>
            </Card>
    </div>;
  }
});
*/
