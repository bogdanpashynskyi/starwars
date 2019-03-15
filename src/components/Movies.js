import React from 'react'
import { Link, Route, Switch} from 'react-router-dom'

import { getResources, getResourceItemById } from '../api/getMovies'
import DataTable from '../common/DataTable'

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
    config: moviesColumnConfig,
  }

  async componentDidMount() {
    const movies = await getResources()

    this.setState({ 
      movies,
      isLoaded: true,
    })
  }

  render() {
    const { config, movies, isLoaded } = this.state

    return (
      <div>
        {isLoaded ? 
        <div>
          <DataTable 
          config={config}
          items={movies}/> 
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
        <table className="Details__container">
          <tbody>
          {isLoaded ?
          Object.entries(config).map(([key, value]) =>
          <tr
          key={key}
          >
            <td
            className="Details__title">
            {value.title}
            </td>
            <td
            className="Details__content">
            {movie[key]}
            </td>
          </tr>
        ): 
        <div> the movie is loading...</div>}       
          </tbody>
        </table>

      </div>
    )
  }
}