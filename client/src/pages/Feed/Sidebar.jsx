/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'

function Sidebar() {
    const user = JSON.parse(localStorage.getItem('profile'))

    return (
        <div className="col-12 col-lg-3">
            <div className="d-none d-xxl-block fixed-top h-100 overflow-hidden" style={{ maxWidth: '360px', width: '100%', zIndex: 4 }}>

                <ul className="d-flex flex-column mb-5 ms-3 mt-4 navbar-nav pb-5" style={{ paddingTop: '56px' }}>

                    <li className="dropdown-item p-1 rounded">
                        <a className="d-flex align-items-center text-decoration-none text-dark" href="">
                            <div className="p-2">

                                <img className="rounded-circle me-2 photo" src={user.result.picture} alt="" />
                            </div>

                            <div>
                                <p className="m-0">{user.result.name}</p>
                            </div>
                        </a>
                    </li>

                    <li className="dropdown-item p-1 rounded">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">

                                <img className="rounded-circle photo" src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png" alt="" />
                            </div>

                            <div>
                                <p className="m-0">Friends</p>
                            </div>
                        </a>
                    </li>

                    <li className="dropdown-item p-1 rounded">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">
                                <img className="rounded-circle photo" src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png" alt="" />
                            </div>

                            <div>
                                <p className="m-0">Groups</p>
                            </div>
                        </a>
                    </li>

                    <li className="dropdown-item p-1 rounded">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">
                                <img className="rounded-circle photo" src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png" alt="" />
                            </div>

                            <div>
                                <p className="m-0">Pages</p>
                            </div>
                        </a>
                    </li>

                    <li className="dropdown-item p-1 rounded">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">
                                <img className="rounded-circle photo" src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png" alt="" />
                            </div>

                            <div>
                                <p className="m-0">Marketplace</p>
                            </div>
                        </a>
                    </li>

                    <li className="dropdown-item p-1 rounded">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">
                                <img className="rounded-circle photo" src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png" alt="" />
                            </div>

                            <div>
                                <p className="m-0">Watch</p>
                            </div>
                        </a>
                    </li>

                    <li className="p-1" type="button">
                        <div id="seeMore">
                            <div className="align-items-center d-flex"
                                aria-controls="flush-collapseOne"
                                aria-expanded="false"
                                data-bs-target="#flush-collapseOne"
                                data-bs-toggle="collapse">

                                <div className="p-2">
                                    <i className="fas fa-chevron-down rounded-circle p-2" style={{ backgroundColor: '#d5d5d5 !important' }} />
                                </div>
                                <div>
                                    <p className="m-0">See More</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <hr className="m-0" />

                    <div className="align-items-center d-flex edit-heading justify-content-between mt-2 text-muted">
                        <h4 className="m-0 pointer">Your Shortcuts</h4>

                        <p className="edit-button m-0 me-3 pointer text-primary" type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#shortCutModal"> Edit
                        </p>
                    </div>

                    <li className="dropdown-item p-1">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">

                                <img className="border border-1 border-secondary photo rounded" src="https://source.unsplash.com/random/10" alt="" />
                            </div>

                            <div>
                                <p className="m-0">Events</p>
                            </div>
                        </a>
                    </li>

                    <li className="dropdown-item p-1">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">

                                <img className="border border-1 border-secondary photo rounded" src="https://source.unsplash.com/random/20" alt="" />
                            </div>

                            <div>
                                <p className="m-0">Holiday</p>
                            </div>
                        </a>
                    </li>

                    <li className="dropdown-item p-1">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">

                                <img className="border border-1 border-secondary photo rounded" src="https://source.unsplash.com/random/30" alt="" />
                            </div>

                            <div>
                                <p className="m-0">Travel</p>
                            </div>
                        </a>
                    </li>

                    <li className="dropdown-item p-1">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">

                                <img className="border border-1 border-secondary photo rounded" src="https://source.unsplash.com/random/40" alt="" />
                            </div>

                            <div>
                                <p className="m-0">Others</p>
                            </div>
                        </a>
                    </li>

                    <li className="p-1" type="button">
                        <div id="seeMoreShortcuts">
                            <div className="align-items-center d-flex"
                                aria-controls="flush-collapseOne"
                                aria-expanded="false"
                                data-bs-target="#flush-collapseOne"
                                data-bs-toggle="collapse">

                                <div className="p-2">
                                    <i className="fas fa-chevron-down rounded-circle p-2" style={{ backgroundColor: '#d5d5d5 !important' }} />
                                </div>

                                <div>
                                    <p className="m-0">See More</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="p-0 mt-5">
                            <p className="text-muted fs-7">
                                Privacy • Terms • Advertising • Ad Choices • Cookies • Facebook © 2022
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar