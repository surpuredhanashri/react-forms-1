import React, { Component } from 'react'
import BusinessForm from './BussinessForm'
import PersonalForm from './PersonalForm'
import { Link } from "react-router-dom"

export default class Beneficiary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            option: "personal",
            form: {
                firstName: "",
                lastName: "",
                email: "",
                number: ""
            },
            error: {
                firstName: "",
                lastName: "",
                email: "",
                number: ""
            },
            activateNext: false
        }
    }

    change = () => {
        this.setState(prevState => {
            return {
                option: prevState.option === "personal" ? "bussiness" : "personal",
                form: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    number: ""
                }
            }
        })
    }

    changeForm = (e) => {

        const { name, value } = e.target

        let error = ""
        if (name === "firstName" || name === "lastName") {
            if (this.validateName(value)) {
                error = "Only Characters Allowed"
            }
        }
        else if (name === "email") {
            if (this.validateEmail(value)) {
                error = "Please enter valid email"

            }
        }
        else if (name === "number") {
            if (this.validateNumber(value)) {
                error = "Number must contain only 10 digits"
            }
        }

        this.setState(prevState => {
            return {
                form: {
                    ...prevState.form,
                    [name]: value
                },
                error: {
                    ...prevState.error,
                    [name]: error
                }
            }
        })

        this.checkForActivate()
    }

    checkForActivate = () => {
        const form = this.state.form
        if ((form.firstName || form.lastName) && form.email && form.number)
            this.setState({
                activateNext: true
            })
    }

    validateName = (value) => {
        return /[^a-zA-Z]/.test(value)
    }

    validateEmail = (value) => {
        return !/([a-zA-Z]+)([\d]*)@([a-z]+)\.([a-z]+)/.test(value)
    }

    validateNumber = (value) => {
        return !/^([0-9]{10})$/.test(value)
    }




    componentWillUnmount() {
        this.props.addDetails(this.state.form)
    }


    render() {
        return (
            <div className="container beneficiary">
                <h1>Beneficiary</h1>
                <div className="choose">
                    <p
                        className={this.state.option === "personal" ? "active type" : "type"}
                        onClick={this.change}>
                        Personal
                    </p>
                    <p
                        className={this.state.option === "bussiness" ? "active type" : "type"}
                        onClick={this.change}>
                        Business
                    </p>
                </div>
                {
                    this.state.option === "personal" ?
                        <PersonalForm {...this.state.form} changeForm={this.changeForm} error={this.state.error} />
                        : <BusinessForm {...this.state.form} changeForm={this.changeForm} error={this.state.error} />
                }
                <div className="navLinks">
                    <Link to={this.state.activateNext ? "/bank" : ""}>Next</Link>
                </div>

            </div>
        )
    }
}
