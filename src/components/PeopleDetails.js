import React from 'react'
import { getAll } from '../api/_helper'

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
    person: '',
    isLoaded: false,
  }

  componentDidMount() {
    this.loadPerson();
  }

  getId = (fullUrl) => {
    const regexp = /\d+/g
    const id = fullUrl.match(regexp);
    return id[0];
}

  loadPerson = () => {
    const id = this.props.id;

    for (let person of this.props.people) {
      if (id === this.getId(person.url)) {
        this.setState( { person, isLoaded: true, 
         });
      }
    }
  }

  render() { 
    const { person, isLoaded } = this.state;

    return (
    <div>
      {isLoaded ?
      <div>
        <div>{person.name}</div>
        <div>{person.gender}</div>
        <div>{person.birth_year}</div>
      </div>
      : <div>Loading Character......</div> 
      }
    </div>
    )}
}

export default PeopleDetails;
