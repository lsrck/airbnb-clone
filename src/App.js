import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';
import Flat from './components/flat';
import SimpleMap from './components/googleMaps'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      allFlats: [],
      selectedFlat: null,
      search: ""
    };
  }

  componentWillMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url) // AJAX
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data,
          allFlats: data
        });
      })
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    });
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name))
    })
  }

  render() {

    return (
      <div className='app'>
        <div className='main'>
          <div className='search'>
          <input
            type="text"
            placeholder="Search..."
            value={this.state.search}
            onChange={this.handleSearch} />
          </div>
          <div className='flats'>
            {this.state.flats.map(flat =>
              {return <Flat key={flat.name} flat={flat} selectFlat={this.selectFlat} />
            })}
          </div>
        </div>
        <div className='map'>
          <SimpleMap flats={this.state.flats} selectedFlat={this.state.selectedFlat}/>
        </div>
      </div>
    );
  }
}

export default App;
