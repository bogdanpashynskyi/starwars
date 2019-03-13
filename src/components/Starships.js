import React from 'react';
import { getAll } from '../api/_helper'

export default class Starships extends React.Component {
  state = {
    starships: [],
    isLoaded: false,
  }
  componentDidMount() {
    this.loadStarships()
  }

  loadStarships = async () => {
    const { results } = await getAll('starships')

    this.setState({
      starships: results,
      isLoaded: true
    })
  }
  render() {
    let { starships, isLoaded } = this.state;
    return (

      <div>
        <h2>Starships</h2>
        {isLoaded ? 
          <div>{starships.map(ship => {
            return <div key={ship.model}>
            {ship.name}
            </div>
          })}</div> : 
          <div>loading...</div>}
      </div>
      ) 
  }
}