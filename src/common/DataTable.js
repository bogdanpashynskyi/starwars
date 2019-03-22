import React from 'react'

const DataTable = (props) => {
  const { items, config } = props
  return (
      <table>
        <thead>
          <tr>
            {Object.entries(config).map(([key, value]) => 
              <th
              key={key}
              className={value.isSortable ? 
                "App__header-sortable" : ""
              }
              >
              {value.title}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {items.map(item => { return (
            <Rows
            key={item.id} 
            item={item} 
            config={config} 
            />)
          })}
        </tbody>
      </table>
    )
}

export default DataTable


const Rows = ({item, config}) => (
  <tr>
    {Object.keys(config).map(key => (
      <Cell 
      key={key}
      item={item}
      column={key}
      render={config[key].render}
      />
    ))}
  </tr>
)

const Cell = ({ item, column, render }) => (
  <td>{render ? render(item) : item[column]}</td>
)

