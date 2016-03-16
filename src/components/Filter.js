import React from 'react';
import { fetchTemperatureIfNeeded } from '../actions'
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
  margin: 12,
};

class Filter extends React.Component {

  constructor(props) {
    super(props);

    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, filter } = this.props;

    dispatch(fetchTemperatureIfNeeded(filter))
  }

  handleChange(v) {
  }

  render() {
    const { filter } = this.props;
    console.log(filter);

    return (
      <Card className="card">
        <CardHeader
        title="Selecione sua cidade"
        subtitle=""
        actAsExpander={true}
        showExpandableButton={true}/>
        <CardText expandable={true}>
          <select onChange={this.handleChange} value={filter.estado}>
            {
              this.props.data.states.map(function(item) {
                return <option readOnly={true} value={item}>{item.name}</option>
              })
            }
          </select>

          <select onChange={this.handleChange} value={filter.cidade}>
            {
              this.props.data.states.map(function(city) {
                return <option readOnly={true} value='São Paulo'>São Paulo</option>
              })
            }
          </select>

          <a
            onClick={this.handleRefreshClick}>
            Atualizar
          </a>
        </CardText>
      </Card>);
  }
}

Filter.propTypes = {
  filter: React.PropTypes.shape({
    estado: React.PropTypes.string,
    cidade: React.PropTypes.string
  })
}

function mapStateToProps(state) {
  const { filter } = state;
  console.log(state);
  return {
    filter
  }
}

export default connect(mapStateToProps)(Filter)
