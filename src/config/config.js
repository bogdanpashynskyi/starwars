import React from 'react'
import { Link } from 'react-router-dom'

export const config = {
  name: {
    title: 'Name',
    isSortable: true,
    isSearchable: true,
    render: item => (
      <Link to={`/people/${item.id}`}>{item.name}</Link>
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