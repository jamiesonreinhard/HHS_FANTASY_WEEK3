import React, { Component } from 'react'
import './App.css';
import Teams from '../components/Teams/Teams';

export default class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    teams: [
      {
        name: 'Littleton Lillywhites',
        ranking: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        id: 'fds'
      },
      {
        name: 'Josh Jacobs Jin gleHeimerSchmit',
        ranking: 2,
        description: '',
        id: 'fkdjso'
      },
      {
        name: 'B.B.s Bebes!',
        ranking: 3,
        description: '',
        id: '47328fd'
      },
      {
        name: 'No! This is Patrick!',
        ranking: 4,
        description: '',
        id: 'gh56'
      },
      {
        name: 'Cast Away',
        ranking: 5,
        description: '',
        id: 'lkkj4'
      },
      {
        name: 'PteroDaktyl Hunters',
        ranking: 6,
        description: '',
        id: 'lfdw0'
      },
      {
        name: 'Krickity Krakens',
        ranking: 7,
        description: '',
        id: 'fkd23'
      },
      {
        name: 'Negative Nancys',
        ranking: 8,
        description: '',
        id: 'bfjd98'
      },
      {
        name: 'Independent Black Ladies',
        ranking: 9,
        description: '',
        id: 'kldsaw34'
      },
      {
        name: 'Hursty Hursday',
        ranking: 10,
        description: '',
        id: '7893ddf'
      },
      {
        name: '3 Vom Tom',
        ranking: 11,
        description: '',
        id: 'fhjb8ew'
      },
      {
        name: 'JuliHoes in This House',
        ranking: 12,
        description: '',
        id: 'bvc746bf'
      },
    ],
    otherState: 'some other value'
  };

  render() {

    return (
      <div className="App">
        <h1>Week 3 Power Rankings</h1>
        <div className="Grid">
        <Teams teams={this.state.teams}/>
        </div>
      </div>
    )
  }
}

