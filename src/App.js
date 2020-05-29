import React, {Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Product from './Components/Product/Product';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventoryList: [],
    }
    this.currentProduct=this.currentProduct.bind(this)
    this.componentDidMount=this.componentDidCatch.bind(this)
  }

  componentDidMount(){
    axios.get('/api/inventory').then((res)=>{
      this.setState({
        inventoryList: res.data
      })
    })
  }

  render(){ 
    return (
      <div className="App">
        <Dashboard 
          inventoryList={this.state.inventoryList}
          componentDidMount={this.componentDidMount}
          />
        <Form 
          currentProduct={this.currentProduct}
          componentDidMount={this.componentDidMount}
          />
        <Header />
        <Product 
          inventoryList={this.state.inventoryList}
          />
      </div>
    )
  }
}

export default App;
