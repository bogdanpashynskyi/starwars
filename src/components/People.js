import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { getAll } from '../api/starships'
import PeopleDetails from './PeopleDetails'

const PeoplePage = () => {
  return (
  <Switch>
    <Route exact path="/people" component={People}/>
    <Route path="/people/:id" component={PeopleDetails}/>
  </Switch>
  )
}

class People extends React.Component {
  state = {
    people: [],
    isLoaded: false,
  }
  componentDidMount() {
    this.loadPeople()
  }

  loadPeople = async () => {
    const allItems = await getAll('people')
    const results = allItems.results;
    this.setState({
      people: results,
      isLoaded: true
    })
  }

  getId = (fullUrl) => {
      const regexp = /\d+/g
      const id = fullUrl.match(regexp);
      return id;
  }

  render() {
    let { people, isLoaded } = this.state;
    return (

      <div>
        <h2>People</h2>
        {isLoaded ? 
          <div>{people.map(person => {
            return <div key={person.name}>
            <Link to={`/people/${this.getId(person.url)}`}>{person.name}
            </Link>
            </div>
          })}</div> : 
          <div>Loading List of Characters...</div>}
      </div>
      ) 
  }
}

export default PeoplePage