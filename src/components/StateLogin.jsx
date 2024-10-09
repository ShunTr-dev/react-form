import { useState } from 'react'
import Input from './Input'
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation'

export default function StateLogin() {
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: '',
    })

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false,
    })

    const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email)
    const passwordIsInvalid =
        didEdit.password && !hasMinLength(enteredValues.password, 6) && !isNotEmpty(enteredValues.password)

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

        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: false,
        }))
    }

    function handleInputBlur(identifier) {
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: true,
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    error={emailIsInvalid && 'Please enter a valid email email.'}
                    onBlur={() => handleInputBlur('email')}
                    onChange={(event) => handleInputChange('email', event)}
                    value={enteredValues.email}
                />

                <Input
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    error={passwordIsInvalid && 'Please enter a valid password.'}
                    onBlur={() => handleInputBlur('password')}
                    onChange={(event) => handleInputChange('password', event)}
                    value={enteredValues.password}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    )
}
