import React from 'react' 

const DetailsPage = (props) => {
  const { movie, isLoaded, config } = props
  
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

export default DetailsPage