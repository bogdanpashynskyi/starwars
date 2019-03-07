import React from 'react'

import getAll from '../api/starships'

export default class People extends React.Component {
  state = {
    people: [],
    isLoaded: false,
  }
  componentDidMount() {
    this.loadPeople()
  }

  loadPeople = async () => {
    const { results } = await getAll('people')
    
    this.setState({
      people: results,
      isLoaded: true
    })
  }
  render() {
    let { people, isLoaded } = this.state;
    return (

      <div>
        <h2>People</h2>
        {isLoaded ? 
          <div>{people.map(person => {
            return <div key={person.model}>
            {person.name}
            </div>
          })}</div> : 
          <div>loading</div>}
      </div>
      ) 
  }
}