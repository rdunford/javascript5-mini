import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this)
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles').then(res => {
      console.log(res.data);

       this.setState({
        cars: res.data
      })

    })

  }

  render() {
    let car = this.state.cars.map( (car, i ) =>{
      return(
        <div key={i}>
          <h1>{car.make}</h1>
          <h1>{car.model}</h1>
          <h1>{car.year}</h1>
          <h1>{car.color}</h1>
        </div>
      )
    })
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {car}
      </div>
    );
  }
}

export default App;
