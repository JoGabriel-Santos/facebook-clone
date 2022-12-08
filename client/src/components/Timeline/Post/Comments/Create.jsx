import React from 'react'

function CreateComment() {
    const user = JSON.parse(localStorage.getItem('profile'))

    return (
        <form className="d-flex my-1">
            <div>
                <img className="rounded-circle me-2" src={user.result.picture} style={{ width: '38px', height: '38px', objectFit: 'cover' }} alt="" />
            </div>

            <input className="bg-gray border-0 form-control rounded-pill" placeholder="Write a comment" type="text" />
        </form>
    )
}

export default CreateComment