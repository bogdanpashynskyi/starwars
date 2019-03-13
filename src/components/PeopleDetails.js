import React from 'react'

const PeopleDetails = (props) => {
  return (
   <h3>{props.match.params.id}</h3>
  )
}

export default PeopleDetails;
