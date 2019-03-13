import React from 'react'
import { getAll } from '../api/starships'

class PeopleDetails extends React.Component {
  state = {
    people: [],
    isLoaded: false,
  }
  componentDidMount() {
    this.loadPeople();
  }

  loadPeople = async () => {
    const allItems = await getAll('people')
    const results = allItems.results;
    this.setState({
      people: results,
      isLoaded: true,
    })
  }

  render() { 
    const { isLoaded, people } = this.state;

    return (
    <div>
      {isLoaded ?
      <Details 
      people={people}
      id={this.props.match.params.id}/>
      : <div>Loading Character...</div> 
      }
    </div>
 
  )}
}

class Details extends React.Component{
  state = {
    person: ''
  }

  componentDidMount() {
    this.loadPerson();
  }

  getId = (fullUrl) => {
    const regexp = /\d+/g
    const id = fullUrl.match(regexp);
    return id;
}

  loadPerson = () => {
    const id = this.props.id;
    for (let person of this.props.people) {
      if (id === this.getId(person.url)) {
        this.setState( { person });
      }
    }
  }

  render() { 
    const { person } = this.state;
    return (
    <div>
      {person ?
      <div>
        <div>{person.name}</div>
        <div>{person.gender}</div>
        <div>{person.birth_year}</div>
      </div>
      : <div>Loading Character...</div> 
      }
    </div>
    )}
}

export default PeopleDetails;
