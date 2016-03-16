import React, { PropTypes, Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import SelectField from 'material-ui/lib/select-field';
import { connect } from 'react-redux'

class Temperature extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { temperature } = this.props;
    console.log(this.props);
    return (
      <div>
        <Card className="card">
          <CardText expandable={false}>
            {
              temperature.previsoes.map(function(previsao) {
                return <div>{previsao.data}</div>
              })
            }
          </CardText>
        </Card>
      </div>
    );
  }
}

Temperature.propTypes = {
  temperature: React.PropTypes.object
}

function mapStateToProps(state) {
  const { temperature } = state;
  console.log(state);
  return {
    temperature
  }
}

export default connect(mapStateToProps)(Temperature)
