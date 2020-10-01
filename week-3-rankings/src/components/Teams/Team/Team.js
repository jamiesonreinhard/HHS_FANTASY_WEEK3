import React, { Component } from 'react'
import './Team.css'

export default class Team extends Component {
  render() {
    return (
      <div className="Team">
        <div>
          <h1 className="team-ranking"><em>#{this.props.ranking}</em></h1>
        </div>
        <div classname="team-details">
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}
