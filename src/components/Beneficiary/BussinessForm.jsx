import React, { Component } from 'react'

export default class BussinessForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <form className="personal-form" >
                <label>
                    Business Name
                 <input type="text" placeholder="Business Name"
                        name="firstName" value={this.state.firstName} onChange={this.props.changeForm} />
                </label>
                <p className="error">{this.props.error.firstName}</p>
                <label>
                    Email
                <input type="email" placeholder="Email"
                        name="email" value={this.state.email} onChange={this.props.changeForm} />
                </label>
                <p className="error">{this.props.error.email}</p>
                <label>
                    Phone No
                <input type="text" placeholder="Phone Number" name="number"
                        value={this.state.number} onChange={this.props.changeForm} />
                </label>
                <p className="error">{this.props.error.number}</p>
            </form>
        )
    }
}

