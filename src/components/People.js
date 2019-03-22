import React from 'react'

import { getResources, getResourceItemById } from '../api/getPeople'
import DataTable from '../common/DataTable'
import DetailsPage from '../common/DetailsPage'
import Pagination from '../common/Pagination'
import { config } from '../config/config'

 export class People extends React.Component {
  state = {
    people: [],
    count: 0,
    page: 0,
    isLoaded: false,
    config: config,
  }

  componentDidMount() {
    this.getPageFromUrl()
  }

  componentDidUpdate() {
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

export class PeopleDetails extends React.Component {
  state = {
    people: null,
    isLoaded: false,
    config: config
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
