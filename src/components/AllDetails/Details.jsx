import React from 'react'
import "./Details.css"
import { Link } from "react-router-dom"

export default function Details(props) {
    return (
        <div className="details-container">
            <h1>Verify All Details</h1>
            <div className="details">
                <p>Name</p>
                <p>{props.firstName} {props.lastName}</p>
                <p>Email</p>
                <p>{props.number}</p>

                <p>Country</p>
                <p>{props.country.toUpperCase()}</p>

                <p>Currency</p>
                <p>{props.currency}</p>

                <p>Bank Details</p>
                <p>{props.bankDetails}</p>

                <p>ACH routing Number</p>
                <p>{props.ach}</p>

                <p>Account Number</p>
                <p>{props.accNumber}</p>

                <p>Account Type</p>
                <p>{props.accType}</p>
            </div>
            <Link to="/address" className="prev">Previous</Link>
        </div>
    )
}
