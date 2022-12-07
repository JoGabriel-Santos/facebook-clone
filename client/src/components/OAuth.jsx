import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import jwtDecode from 'jwt-decode'

function OAuth() {
    const dispatch = useDispatch()
    const history = useHistory()

    function handleCallbackResponse(response) {
        const result = jwtDecode(response.credential)
        const token = response

        try {
            dispatch({ type: 'AUTH', data: { result, token } })
            history.push('/')

        } catch (error) {

            console.log(error)
        }
    }

    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: '618793263467-re75oee2vlltounou0tuejus4ripr9a9.apps.googleusercontent.com',
            callback: handleCallbackResponse,
        })

        window.google.accounts.id.renderButton(document.getElementById('googleButton'), {
            theme: 'outline',
            size: 'large',
        })
    })

    return (
        <div className="my-4 text-center">
            <button className="btn btn-lg" type="button">
                <div id={'googleButton'} />
            </button>
        </div>
    )
}

export default React.memo(OAuth)