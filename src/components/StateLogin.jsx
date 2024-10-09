import { useState } from 'react'
import Input from './Input'

export default function StateLogin() {
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: '',
    })

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false,
    })

    const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@')
    const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 6

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
