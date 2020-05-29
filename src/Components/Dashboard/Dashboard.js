import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

function Dashboard (props) {
    const rosterInventory = props.inventoryList.map((element) => (
        <Product
            key={element.id}
            name={element.name}
            price={element.price}
            image={element.image}
            data={element}
                />
    ))

    deleteProduct(){
        axios.delete('/api/delete').then((res)=>{
            this.setState({
                inventoryList: res.data
            })
        })
        componentDidMount()
    }

    return(
        <div>
            <span>Dashboard</span>
            <span>{rosterInventory}</span>
            <Product 
                componentDidMount={this.componentDidMount}
                />
        </div>
    )
}

export default Dashboard