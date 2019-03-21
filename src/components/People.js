import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import { getResources, getResourceItemById } from '../api/getPeople'
import DataTable from '../common/DataTable'
import DetailsPage from '../common/DetailsPage'
import Pagination from '../common/Pagination'

export const peopleColumnConfig = {
  name: {
    title: 'Name',
    isSortable: true,
    isSearchable: true,
    render: person => (
      <Link to={`/people/${person.id}`}>{person.name}</Link>
    ),
  },
  mass: {
    title: 'Mass',
    isSortable: true,
  },
  hair_color: {
    title: 'Hair Color',
  },
  birth_year: {
    title: 'Born',
    isSortable: true,
  },
  gender: {
    title: 'Gender',
  },
  height: {
    title: 'Height',
  },
  species: {
    title: 'Species',
  },
  homeworld: {
    title: 'Homeworld ',
  },
  skin_color: {
    title: 'Skin Color',
  },
};

const PeoplePage = () => {
   return (
   <Switch>
     <Route exact path="/people" component={People}/>
     <Route path="/people/:id" component={PeopleDetails}/>
   </Switch>
   )
 }

 export default PeoplePage

 class People extends React.Component {
  state = {
    people: [],
    count: 0,
    page: 1,
    isLoaded: false,
    config: peopleColumnConfig,
  }

  componentDidUpdate() {
    this.getPageFromUrl()
  }

  componentDidMount() {
    this.getPageFromUrl()
  }

  getPageFromUrl = () => {
    const { location } = this.props
    const urlParams = new URLSearchParams(location.search)
    const page = +urlParams.get('page') || 1

    if(page === this.state.page) {
      return;
    }
    
    this.setState({ page }, this.loadPeople)
  }

  loadPeople = async () => {
    const { page } = this.state
    const {count, people} = await getResources({ page })

    this.setState({ 
      people,
      count,
      isLoaded: true,
    })
  }

  render() {
    const { config, people, count, page, isLoaded } = this.state

    return (
      <div>
        {isLoaded ? 
        <div>
          <Pagination
            page={page}
            count={count}
            />
          <DataTable 
          config={config}
          items={people}/> 
        </div> : 
        <p> characters are loading...</p>} 
      </div>
    )
  }
}

class PeopleDetails extends React.Component {
  state = {
    people: null,
    isLoaded: false,
    config: peopleColumnConfig
  }

  async componentDidMount() {
    const person = await getResourceItemById(this.props.match.params.id)

    this.setState( { 
      person,
      isLoaded: true,
    })
  }

  render() {
    const { person, isLoaded, config } = this.state
    return (
      <div>
        <DetailsPage 
          movie={person}
          isLoaded={isLoaded}
          config={config}
        />
      </div>
    )
  }
}
