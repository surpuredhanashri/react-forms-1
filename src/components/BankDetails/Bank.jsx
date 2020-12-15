import React, { Component } from 'react'
import { Link } from "react-router-dom"
import BankForm from './BankForm'
import currencyData from "./Currency.json"

export default class Bank extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                country: "select",
                currency: "",
                bankDetails: "",
                ach: "",
                accNumber: "",
                accType: "select"
            }
        }
    }

    changeForm = (e) => {
        const { name, value } = e.target

        if (name === "country") {
            this.setState(prevState => {
                return {
                    data: {
                        ...prevState.data,
                        [name]: value,
                        currency: currencyData[value]
                    }
                }
            })
        }

        else {
            this.setState(prevState => {
                return {
                    data: {
                        ...prevState.data,
                        [name]: value
                    }
                }
            })
        }
    }

    componentWillUnmount() {
        this.props.addDetails(this.state.data)
    }

    render() {
        return (
            <div className="container">
                <h1>Bank Details</h1>
                <BankForm {...this.state.data} changeForm={this.changeForm} />
                <div className="navLinks">
                    <Link to="/">Previous</Link>
                    <Link to="/address">Next</Link>
                </div>

            </div>
        )
    }
}
