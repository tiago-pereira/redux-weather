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
import RaisedButton from 'material-ui/lib/raised-button';

const style = {
  margin: 12,
};


export default class Filter extends React.Component {

  constructor(props) {
    super(props);

    console.log(props);
    this.state = {cities: [], estado: props.data.states.filter((v) => v.initials === 'SC')[0]};

    this.changeEstado = this.changeEstado.bind(this);
  }

  changeEstado(event) {
    console.log(event.target.value.cities);
    this.setState({estado: event.target.value, cities: event.target.value.cities});
  }

  render() {
    return (
      <Card className="card">
        <CardHeader
        title="Selecione sua cidade"
        subtitle=""
        actAsExpander={true}
        showExpandableButton={true}/>
        <CardText expandable={true}>
          <select onChange={this.changeEstado}>
            {
              this.props.data.states.map(function(item) {
                return <option value={item}>{item.name}</option>
              })
            }
          </select>

          <select>
            {
              this.state.cities.map(function(city) {
                return <option value={city}>{city}</option>
              })
            }
          </select>

          <RaisedButton label="Buscar" style={style}/>
        </CardText>
      </Card>);
  }
}
