import React from 'react'
import { Link, Route, Switch} from 'react-router-dom'

import { getResources, getResourceItemById } from '../api/getMovies'
import DataTable from '../common/DataTable'
import DetailsPage from '../common/DetailsPage'
import SearchBar from '../common/Search'
import Pagination from '../common/Pagination'

export const moviesColumnConfig = {
  title: {
    title: 'Title',
    isSortable: true,
    isSearchable: true,
    render: movie => (
      <Link 
      to={`/movies/${movie.id}`}>
      {movie.title}
      </Link>
    ),
  },
  release_date: {
    title: 'Release Date',
  },
  episode_id: {
    title: 'Episode #',
    isSortable: true,
  },
  director: {
    title: 'Director',
    isSortable: true,
  },
  producer: {
    title: 'Producer',
    isSortable: true,
  },
  opening_crawl: {
    title: 'Opening Crawl',
    isSearchable: true,
  },
}

export const MoviesPage = () => {
  return (
    <Switch>
      <Route exact path="/movies" component={Movies}/> 
      <Route path="/movies/:id" component={MovieDetails}/> 
    </Switch>
  )
}

class Movies extends React.Component {
  state = {
    movies: [],
    isLoaded: false,
    count: 0,
    page: 1,
    config: moviesColumnConfig,
  }

  async componentDidMount() {
    const { count, movies } = await getResources()

    this.setState({ 
      count,
      movies,
      isLoaded: true,
    })
  }

  render() {
    const { config, movies, count, page, isLoaded } = this.state

    return (
      <div>
        {isLoaded ?
        <div>
          <SearchBar/>
          <Pagination
            count={count}
            page={page}
            />
          <DataTable 
          config={config}
          items={movies}
          /> 
        </div> : 
        <p> movies are loading...</p>} 
      </div>
    )
  }
}

class MovieDetails extends React.Component {
  state = {
    movie: null,
    isLoaded: false,
    config: moviesColumnConfig
  }

  async componentDidMount() {
    const movie = await getResourceItemById(this.props.match.params.id)

    this.setState( { 
      movie,
      isLoaded: true,
    })
  }

  render() {
    const { movie, isLoaded, config } = this.state
    return (
      <div>
        <DetailsPage 
          movie={movie}
          isLoaded={isLoaded}
          config={config}
        />
      </div>
    )
  }
}