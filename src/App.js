import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { updateUser } from './actions/index-actions';

class App extends Component {  
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);    
    this.onChangeUpdateUser = this.onChangeUpdateUser.bind(this);  
  }
  onUpdateUser() {
    this.props.onUpdateUser('Samy');
  }
  onChangeUpdateUser(newValue) {
    this.props.onUpdateUser(newValue);
  }
  render() {    
    return (    
      <div className="App">
        <button onClick={this.onUpdateUser}>Atualizar Usuario</button>
        <div>
          {this.props.user}
        </div>
        <div>
          <input
            value={this.props.user}
            onChange={(e) => this.onChangeUpdateUser(e.target.value)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});
const mapActionsToProps = {
  onUpdateUser: updateUser
}

export default connect(mapStateToProps, mapActionsToProps)(App);

//https://www.youtube.com/watch?v=kJeXr1K3nyg
