import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

export const charactersColumnConfig = {
  name: {
    title: 'Name',
    isSortable: true,
    isSearchable: true,
    render: person => (
      <Link to={`/people/${person.name}`}>{person.name}</Link>
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
// const PeoplePage = () => {
//   return (
//   <Switch>
//     <Route exact path="/people" component={People}/>
//     <Route path="/people/:id" component={PeopleDetails}/>
//   </Switch>
//   )
// }
