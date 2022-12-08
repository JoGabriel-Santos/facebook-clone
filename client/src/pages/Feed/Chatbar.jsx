import React from 'react'

function Chatbar() {

    return (
        <div className="col-12 col-lg-3">
            <div className="d-none d-xxl-block h-100 position-fixed end-0 overflow-hidden scrollbar"
                style={{ left: 'initial !important', maxWidth: '360px', paddingTop: '56px', width: '100%', zIndex: 4 }}>

                <div className="mt-4 p-3">

                    <h5 className="text-muted">Sponsored</h5>

                    <li className="d-flex dropdown-item justify-content-between my-2">

                        <a className="d-flex align-items-center text-decoration-none link-dark" href="https://github.com/JoGabriel-Santos">
                            <img className="me-3 rounded"
                                src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                                alt="" style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            />

                            <div>
                                <p className="m-0">@JoGabriel-Santos</p>
                                <span className="text-muted fs-7">github.com/JoGabriel-Santos</span>
                            </div>
                        </a>
                    </li>

                    <hr className="m-0" />
                    <div className="align-items-center d-flex justify-content-between my-3">
                        <p className="fs-5 m-0 text-muted">Contacts</p>

                        <div className="text-muted">

                            <i className="fas fa-video mx-2 pointer"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#videoRoomD" />

                            <i className="fas fa-search mx-2 pointer"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#newChat" />
                        </div>
                    </div>

                    <li className="dropdown-item my-2 px-0 rounded" type="button" data-bs-toggle="modal" data-bs-target="#singleChat1">

                        <div className="d-flex align-items-center mx-2 chat-avatar">

                            <div className="position-relative">
                                <img className="rounded-circle me-2 photo" src="https://source.unsplash.com/random/4" alt="avatar" />

                                <span className="bg-success border border-light bottom-0 contacts p-1 position-absolute rounded-circle translate-middle" >

                                    <span className="visually-hidden" />
                                </span>
                            </div>

                            <p className="m-0">Contact</p>
                        </div>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Chatbar
