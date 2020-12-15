import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Address from './components/Address/Address'
import Details from './components/AllDetails/Details'
import Bank from './components/BankDetails/Bank'
import Beneficiary from './components/Beneficiary/Beneficiary'


export default class App extends Component {

    constructor() {
        super()
        this.state = {}
    }

    addDetails = (details) => {
        this.setState({ ...details })
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Beneficiary addDetails={this.addDetails} />
                    </Route>
                    <Route path="/beneficiary">
                        <Beneficiary addDetails={this.addDetails} />
                    </Route>
                    <Route path="/bank">
                        <Bank addDetails={this.addDetails} />
                    </Route>
                    <Route path="/address">
                        <Address addDetails={this.addDetails} />
                    </Route>
                    <Route path="/details">
                        <Details {...this.state} />
                    </Route>
                </Switch>
            </Router>
        )
    }
}