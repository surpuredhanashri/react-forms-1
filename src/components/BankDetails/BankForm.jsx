import React from 'react'

export default function BankForm(props) {
    return (
        <form>
            <label>
                Country
            <select name="country" value={props.country} onChange={props.changeForm}>
                    <option value="select">Select Country</option>
                    <option value="usa">USA</option>
                    <option value="india">India</option>
                    <option value="britain">Britain</option>
                </select>
            </label>

            <label>
                Currency
            <input type="text" value={props.currency} placeholder="Currency" name="currency" readOnly />
            </label>

            <label>
                Bank Details Format
                <div>
                    <input type="radio" id="local" name="bankDetails"
                        value="local bank details" onChange={props.changeForm} />
                        Local bank Details
                </div>

                <div>
                    <input type="radio" id="swift" name="bankDetails"
                        value="swift code" onChange={props.changeForm} />
                        Swift code
                </div>

            </label>

            <label>
                ACH routing Number
            <input type="text" name="ach" value={props.ach} placeholder="ACH routing Number" onChange={props.changeForm} />
            </label>

            <label>
                Account Number
            <input type="text" name="accNumber" value={props.accNumber} placeholder="Account Number" onChange={props.changeForm} />
            </label>

            <label>
                Account Type
            <select name="accType" value={props.accType} onChange={props.changeForm}>
                    <option value="select">Select account type</option>
                    <option value="savings">Savings</option>
                    <option value="current">Current</option>
                </select>
            </label>
        </form>
    )
}
