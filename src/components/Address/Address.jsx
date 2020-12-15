import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Address extends Component {

    constructor(props) {
        super(props)
        this.state = {
            address: ""
        }
    }

    change = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    componentWillUnmount() {
        this.props.addDetails(this.state)
    }

    render() {
        return (
            <div className="container">
                <h1>Address</h1>
                <form>
                    <label>Address</label>
                    <textarea name="address" cols="50" rows="5" placeholder="Address"
                        value={this.state.address} onChange={this.change}></textarea>
                </form>
                <div className="navLinks">
                    <Link to="/bank">Previous</Link>
                    <Link to="/details">Submit</Link>
                </div>

            </div>
        )
    }
}
