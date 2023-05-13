import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onSearchChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachUser1 =>
      eachUser1.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            onChange={this.onSearchChange}
            className="inputElement"
            value={searchInput}
            placeholder="Search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="searchIcon"
          />
        </div>

        <ul className="main-container1">
          {searchResults.map(eachUser => (
            <DestinationItem destinations={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
