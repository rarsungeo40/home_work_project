import React from 'react'
import './App.scss';
import Card from './components/Card/index';
import housesData from './db'

// console.log(housesData);

class App extends React.Component {

  // constructor

  constructor() {
    super();

    this.state = {
      houses: housesData,
    };

    // this.deleteItem = this.deleteItem.bind(this)
  }
  
  deleteItem = (house) => {
    console.log(house.id);
    const updateHouses = this.state.houses.filter( item => item.id !== house.id );
    console.log(updateHouses);
    this.setState({
      houses: updateHouses
    });
    // this.state.houses = updateHouses;
  }

  render() {
    // console.log(this);
    // console.log(this.state.houses);
    // console.log(this.state.houses[0]);
    return (
      <div className="App">
        <div className='cards'>
          
          { this.state.houses.map ( (house) => {
            return (
            
              <Card key={house.id} text={house} deleteItem={this.deleteItem}/>
             
            )
          }
          )  
          }

          {/* <Card text={data[0]}/> */}
          {/* <Card text={data[1]}/> */}
          {/* <Card text={data[0]}/> */}
          {/* <Card text={data[1]}/> */}
          {/* <Card text={data[0]}/> */}
          {/* <Card text={data[1]}/> */}
          {/* <Card text={data[0]}/> */}
          {/* <Card text={data[1]}/> */}
        </div>
      </div>
    );
  }
}

export default App;
