import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class AppNavBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {open: false};

    this.handleToggle = () => this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <AppBar title="Weather" onLeftIconButtonTouchTap={this.handleToggle}/>
        <LeftNav open={this.state.open}>
          <AppBar title="Weather" onLeftIconButtonTouchTap={this.handleToggle}/>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    );
  }
}
