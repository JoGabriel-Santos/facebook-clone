/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'

function Sidebar() {
    const user = JSON.parse(localStorage.getItem('profile'))

    return (
        <div className="col-12 col-lg-3">
            <div className="d-none d-xxl-block fixed-top h-100 overflow-hidden"
                style={{ maxWidth: '360px', width: '100%', zIndex: 4 }}>

                <ul className="d-flex flex-column mb-5 ms-3 mt-4 navbar-nav pb-5" style={{ paddingTop: '56px' }}>

                    {/* Avatar */}
                    <li className="dropdown-item p-1 rounded">
                        <a className="d-flex align-items-center text-decoration-none text-dark" href="">
                            <div className="p-2">
                                <img className="rounded-circle me-2" src={user.result.picture} alt=""
                                    style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                                />
                            </div>

                            <div>
                                <p className="m-0">{user.result.name}</p>
                            </div>
                        </a>
                    </li>

                    {/* Top 1 */}
                    <li className="dropdown-item p-1 rounded">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">
                                <img className="rounded-circle"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png" alt="from fb"
                                    style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                                />
                            </div>

                            <div>
                                <p className="m-0">Friends</p>
                            </div>
                        </a>
                    </li>

                    {/* Top 2 */}
                    <li className="dropdown-item p-1 rounded">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">
                                <img className="rounded-circle"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png" alt="from fb"
                                    style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                                />
                            </div>

                            <div>
                                <p className="m-0">Groups</p>
                            </div>
                        </a>
                    </li>

                    {/* Top 3 */}
                    <li className="dropdown-item p-1 rounded">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">
                                <img className="rounded-circle"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png" alt="from fb"
                                    style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                                />
                            </div>

                            <div>
                                <p className="m-0">Pages</p>
                            </div>
                        </a>
                    </li>

                    {/* Top 4 */}
                    <li className="dropdown-item p-1 rounded">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">
                                <img className="rounded-circle"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png" alt="from fb"
                                    style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                                />
                            </div>

                            <div>
                                <p className="m-0">Marketplace</p>
                            </div>
                        </a>
                    </li>

                    {/* Top 5 */}
                    <li className="dropdown-item p-1 rounded">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">
                                <img className="rounded-circle"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png" alt="from fb"
                                    style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                                />
                            </div>

                            <div>
                                <p className="m-0">Watch</p>
                            </div>
                        </a>
                    </li>

                    {/* See more */}
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

                    {/* Shortcuts */}
                    <div className="align-items-center d-flex edit-heading justify-content-between mt-2 text-muted">
                        <h4 className="m-0 pointer">Your Shortcuts</h4>

                        <p className="edit-button m-0 me-3 pointer text-primary" type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#shortCutModal"> Edit
                        </p>
                    </div>

                    {/* Short 1 */}
                    <li className="dropdown-item p-1">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">
                                <img className="rounded border border-1 border-secondary"
                                    src="https://source.unsplash.com/random/10" alt="from fb"
                                    style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                                />
                            </div>

                            <div>
                                <p className="m-0">Events</p>
                            </div>
                        </a>
                    </li>

                    {/* Short 2 */}
                    <li className="dropdown-item p-1">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">
                                <img className="rounded border border-1 border-secondary"
                                    src="https://source.unsplash.com/random/20" alt="from fb"
                                    style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                                />
                            </div>

                            <div>
                                <p className="m-0">Holiday</p>
                            </div>
                        </a>
                    </li>

                    {/* Short 3 */}
                    <li className="dropdown-item p-1">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">
                                <img className="rounded border border-1 border-secondary"
                                    src="https://source.unsplash.com/random/30" alt="from fb"
                                    style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                                />
                            </div>

                            <div>
                                <p className="m-0">Travel</p>
                            </div>
                        </a>
                    </li>

                    {/* Short 4 */}
                    <li className="dropdown-item p-1">
                        <a className="align-items-center d-flex text-dark text-decoration-none" href="#">
                            <div className="p-2">
                                <img className="rounded border border-1 border-secondary"
                                    src="https://source.unsplash.com/random/40" alt="from fb"
                                    style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                                />
                            </div>

                            <div>
                                <p className="m-0">Others</p>
                            </div>
                        </a>
                    </li>

                    {/* See more */}
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