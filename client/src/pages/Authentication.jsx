import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signin, signup } from '../actions/auth'

import useInput from '../components/hooks/use-input'

import OAuth from '../components/OAuth'

const isNotEmpty = (value) => value.trim() !== ''
const isEmail = (value) => value.includes('@')

function Authentication() {
    const [isSignup, setIsSignup] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();

    let formIsValid = false

    const {
        value: nameValue,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName,
    } = useInput(isNotEmpty)

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail)

    const {
        value: passwordValue,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPassword,
    } = useInput(isNotEmpty)

    if ((isSignup ? nameIsValid : true) && emailIsValid && passwordIsValid) {
        formIsValid = true
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)

        resetName()
        resetEmail()
        resetPassword()
    }

    const submitHandler = event => {
        event.preventDefault()

        let form = { name: nameValue, email: emailValue, password: passwordValue }

        if (!formIsValid) {
            return
        }

        if (isSignup) {
            dispatch(signup(form, history))

        } else {
            dispatch(signin(form, history))
        }

        resetName()
        resetEmail()
        resetPassword()
    }

    return (
        <div className="fill container d-flex flex-column flex-lg-row justify-content-center">

            <div className="m-auto text-center text-lg-start">
                <h1 className="fs-0 fw-bold text-primary">facebook</h1>
                <p className="fs-4 mx-auto mx-lg-0 w-75">
                    Facebook helps you connect and share with the people in your life.
                </p>
            </div>

            <form onSubmit={submitHandler} className="mx-auto m-auto" style={{ maxWidth: '28rem', width: '100%' }}>

                <div className="border bg-white input-group-lg p-3 rounded shadow">

                    {
                        isSignup ?

                            <input
                                className={`form-control my-3 ${nameHasError && 'border-red'}`}
                                placeholder="First name" type="text"
                                onChange={nameChangeHandler}
                                onBlur={nameBlurHandler}
                                value={nameValue}
                            />

                            : null
                    }

                    <input
                        className={`form-control my-3 ${emailHasError && 'border-red'}`}
                        placeholder="Email address" type="text"
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        value={emailValue}
                    />

                    <input
                        className={`form-control my-3 ${passwordHasError && 'border-red'}`}
                        placeholder="Password" type="password"
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurHandler}
                        value={passwordValue}
                    />

                    <button className="btn btn-primary my-3 w-100" type='submit'>{isSignup ? 'Sign Up' : 'Log In'}</button>

                    <p className="pointer text-center text-decoration-none py-2" onClick={switchMode}>
                        {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                    </p>

                    <hr />

                    <OAuth />
                </div>
            </form>
        </div>
    )
}

export default Authentication
