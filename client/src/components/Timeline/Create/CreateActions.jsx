import React from 'react'

function CreateActions() {

    return (
        <div className="d-flex flex-column flex-lg-row mt-3">
            <div className="align-items-center d-flex dropdown-item justify-content-center rounded" type="button">
                <i className="fas fa-video me-2 text-danger" />
                <p className="m-0 text-muted">Live Video</p>
            </div>

            <div className="align-items-center d-flex dropdown-item justify-content-center rounded" type="button">
                <i className="fas fa-photo-video me-2 text-success" />
                <p className="m-0 text-muted">Photo/Video</p>
            </div>

            <div className="align-items-center d-flex dropdown-item justify-content-center rounded" type="button">
                <i className="fas fa-smile me-2 text-warning" />
                <p className="m-0 text-muted">Feeling/Activity</p>
            </div>
        </div>
    )
}

export default CreateActions