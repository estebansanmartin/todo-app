import React, { Component } from 'react'
import List from './TodoList.jsx'

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        items: []
      };
    }
  
    onChange = (event) => {
      this.setState({ term: event.target.value });
    }
  
    onSubmit = (event) => {
      event.preventDefault();
      this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
      });
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Submit</button>
          </form>
          <List items={this.state.items} />
        </div>
      );
    }
  }