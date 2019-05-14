import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const Pagination = ({ location, count, perPage = 10 }) => {
  const pagesCount = Math.ceil(count/perPage);
  const pages = []

  for (let i = 0; pagesCount > i; i++) {
    pages.push(i + 1)
  }

  const getSearchWithPage = (page) => {
    const urlParams = new URLSearchParams(location.search)
    
    urlParams.set('page', page)
    return urlParams.toString();
  }

  return (
    <div>
      {pages.map(item =>
      <Link 
        key={item}
        to={{
          pathname: location.pathname,
          search: getSearchWithPage(item), 
        }}
      >
      {item}
      </Link>
      
      )}
    </div>
  )
}

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number,
  perPage: PropTypes.number,
}

export default withRouter(Pagination)