import React, { Component } from 'react'

export default class DataTable extends Component {
  state = {
    items: this.props.items,
    config: this.props.config,
  }

  render() {
    const { items, config } = this.state

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
}

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

