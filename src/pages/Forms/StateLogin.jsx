import Input from '../../components/UI/Input'
import { isEmail, isNotEmpty, hasMinLength } from '../../util/validation'
import { useInput } from '../../hooks/useInput'

export default function StateLogin() {
    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailHasError,
    } = useInput('', (value) => isEmail(value) && isNotEmpty(value))

    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordHasError,
    } = useInput('', (value) => hasMinLength(value, 6))

    function handleSubmit(event) {
        event.preventDefault()

        if (emailHasError || passwordHasError) {
            return
        }

        console.log('Email:', emailValue)
        console.log('Password:', passwordValue)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login (with state)</h2>

            <div className="control-row">
                <Input
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    error={emailHasError && 'Please enter a valid email email.'}
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                    value={emailValue}
                />

                <Input
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    error={passwordHasError && 'Please enter a valid password.'}
                    onBlur={handlePasswordBlur}
                    onChange={handlePasswordChange}
                    value={passwordValue}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    )
}
