import React from 'react'

function Chatbar() {

    return (
        <div className="col-12 col-lg-3">
            <div className="d-none d-xxl-block h-100 position-fixed end-0 overflow-hidden scrollbar"
                style={{ left: 'initial !important', maxWidth: '360px', paddingTop: '56px', width: '100%', zIndex: 4 }}>

                <div className="mt-4 p-3">

                    {/* Sponsors */}
                    <h5 className="text-muted">Sponsored</h5>

                    {/* S 1 */}
                    <li className="d-flex dropdown-item justify-content-between my-2">

                        {/* Img */}
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

                    {/* Contacts */}
                    <hr className="m-0" />
                    <div className="align-items-center d-flex justify-content-between my-3">
                        <p className="fs-5 m-0 text-muted">Contacts</p>

                        {/* Icons */}
                        <div className="text-muted">

                            {/* Video room */}
                            <i className="fas fa-video mx-2 pointer"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#videoRoomD" />

                            {/* New chat */}
                            <i className="fas fa-search mx-2 pointer"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#newChat" />
                        </div>
                    </div>

                    {/* Friends */}
                    <li className="dropdown-item my-2 px-0 rounded" type="button" data-bs-toggle="modal" data-bs-target="#singleChat1">

                        {/*Avatar */}
                        <div className="d-flex align-items-center mx-2 chat-avatar">

                            <div className="position-relative">
                                <img className="rounded-circle me-2" src="https://source.unsplash.com/random/4" alt="avatar"
                                    style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                                />

                                <span className="bg-success border border-light bottom-0 p-1 position-absolute rounded-circle translate-middle"
                                    style={{ left: '75%' }}>

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
