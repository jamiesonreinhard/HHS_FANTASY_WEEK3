import React, { Component } from 'react';
import Team from './Team/Team';

export default class Teams extends Component {

  render() {
    return this.props.teams.map(team => {
      return <Team 
        name={team.name}
        ranking={team.ranking}
        key={team.id}
        description={team.description}
      />
    })
  }
}
