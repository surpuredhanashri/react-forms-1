import React from 'react'

export default class PersonalForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <form className="personal-form" >
                <label>
                    First Name
                <input type="text" placeholder="First Name" name="firstName"
                        value={this.props.firstName} onChange={this.props.changeForm} autoFocus />
                </label>
                <p className="error">{this.props.error.firstName}</p>
                <label>
                    Last Name
                <input type="text" placeholder="Last Name" name="lastName"
                        value={this.state.lastName} onChange={this.props.changeForm} />
                </label>
                <p className="error">{this.props.error.lastName}</p>
                <label>
                    Email
                <input type="email" placeholder="Email" name="email"
                        value={this.state.email} onChange={this.props.changeForm} />
                </label>
                <p className="error">{this.props.error.email}</p>
                <label>
                    Phone No <input type="text" placeholder="Phone Number" name="number"
                        value={this.state.number} onChange={this.props.changeForm} />
                </label>
                <p className="error">{this.props.error.number}</p>
            </form>
        )
    }
}
