import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(){
        super()

        this.state = {
            input1: '',
            input2: '',
            input3: ''
        }
        this.baseState = this.state
    }
    input1Change(e){
        this.setState({
            input1: e.target.value
        })
    }
    input2Change(e){
        this.setState({
            input2: e.target.value
        })
    }
    input3Change(e){
        this.setState({
            input3: e.target.value
        })
    }
    cancelInput = () => {
        this.setState(this.baseState)
    }
    addProduct(){
        const body = {name, price, image}
        axios.post('/api/product', body).then((res)=>{
            this.setState({
                input1: res.data.name,
                input2: res.data.price,
                input3: res.data.image
            })
        })
        this.componentDidMount()
        cancelInput()
    }

    componentDidUpdate(){
        
    }

    render(){
        return(
            <div>Form
                <input onChange={(e)=>this.input1Change(e)} placeholder="Name" type="text" value={this.state.input1} />
                <input onChange={(e)=>this.input2Change(e)} placeholder="Price" type="text" value={this.state.input2}/>
                <input onChange={(e)=>this.input3Change(e)} placeholder="Image" type="text" value={this.state.input3}/>
                <button onClick={()=>this.addProduct()}>Add To Inventory</button>
                <button onClick={()=>this.cancelInput()}>Cancel</button>
            </div>
        )
    }
}

export default Form
