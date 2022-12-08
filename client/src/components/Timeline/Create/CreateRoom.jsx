import React from 'react'

function CreateRoom() {

    return (
        <div className="bg-white border d-flex justify-content-between mt-3 p-3 position-relative rounded shadow">

            <div>
                <button className="btn btn-info rounded-pill">
                    <i className="fas fa-video me-3" /> Create Room
                </button>
            </div>

            <div>
                <img className="rounded-circle me-2 photo" src="https://source.unsplash.com/random/1" alt="avatar" />
            </div>

            <div className="d-none d-xxl-block position-absolute start-0 top-50 translate-middle" type="button">
                <div className="align-items-center bg-white border d-flex justify-content-center p-2 pointer rounded-circle story slider-btn">
                    <i className="fas fa-chevron-left text-muted" />
                </div>
            </div>

            <div className="d-none d-xxl-block position-absolute start-100 top-50 translate-middle" type="button">
                <div className="align-items-center bg-white border d-flex justify-content-center p-2 pointer rounded-circle story slider-btn">
                    <i className="fas fa-chevron-right text-muted" />
                </div>
            </div>
        </div>
    )
}

export default CreateRoom