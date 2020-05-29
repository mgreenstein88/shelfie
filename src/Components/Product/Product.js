import React, { Component } from 'react'

class Product extends Component {
    constructor(){
        super()

        this.state = {

        }
        this.componentDidMount=this.componentDidMount.bind(this)
    }
    render() {
        return (
            <div>
                <span>{this.props.name}</span>
                <span>{this.props.price}</span>
                <img src={this.props.image} />
            </div>
        )
    }
}

export default Product