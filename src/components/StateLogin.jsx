import { useState } from 'react'

export default function StateLogin() {
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: '',
    })

    const emailIsInvalid = enteredValues.email !== '' && !enteredValues.email.includes('@')

    function handleSubmit(event) {
        event.preventDefault()
        // setEnteredValues({
        //  email: '',
        //  password: '',
        // })
    }

    function handleInputChange(identifier, event) {
        setEnteredValues((prevValues) => {
            return {
                ...prevValues,
                [identifier]: event.target.value,
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={(event) => handleInputChange('email', event)}
                        value={enteredValues.email}
                    />
                    <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={(event) => handleInputChange('password', event)}
                        value={enteredValues.password}
                    />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    )
}
