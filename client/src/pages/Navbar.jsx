import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

function Appbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const logout = () => {
        dispatch({ type: 'LOGOUT' })

        history.push('/auth')
        setUser(null)
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))

    }, [location])

    return (
        <div className="align-items-center bg-white d-flex fixed-top shadow" style={{ minHeight: '62px', zIndex: 5 }}>
            <div className="container-fluid">
                <div className="align-items-center row">

                    {/* search */}
                    <div className="align-items-center col d-flex">

                        {/* logo */}
                        <i className="fab fa-facebook text-primary" style={{ fontSize: '3rem' }} />

                        {/* search bar */}
                        <div className="input-group ms-2" type="button">

                            {/* mobile */}
                            <div className="d-lg-none input-group-prepend" id="searchMenuMobile">

                                <div className="bg-gray border-0 input-group-text rounded-circle" style={{ minHeight: '40px' }}>
                                    <i className="fas fa-search text-muted" />
                                </div>
                            </div>

                            {/* desktop */}
                            <div className="d-lg-block d-none input-group-prepend" id="searchMenu">

                                <div className="bg-gray border-0 input-group-text rounded-pill" style={{ minHeight: '40px', minWidth: '230px' }}>
                                    <i className="fas fa-search me-2 text-muted" />
                                    <p className="fs-7 m-0 text-muted">Search Facebook</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* nav */}
                    <div className="col d-none d-xl-flex justify-content-center">

                        {/* home */}
                        <div className="mx-4 nav__btn nav__btn-active">
                            <button className="btn px-4" type="button">
                                <i className="fas fa-home fs-4 text-muted" />
                            </button>
                        </div>

                        {/* market */}
                        <div className="mx-4 nav__btn">
                            <button className="btn px-4" type="button">
                                <i className="fas fa-store fs-4 text-muted" />
                            </button>
                        </div>

                        {/* group */}
                        <div className="mx-4 nav__btn">
                            <button className="btn px-4" type="button">
                                <i className="fa-users fas fs-4 text-muted" />
                            </button>
                        </div>

                        {/* gaming */}
                        <div className="mx-4 nav__btn">
                            <button className="btn px-4" type="button">
                                <i className="fas fa-gamepad fs-4 text-muted" />
                            </button>
                        </div>
                    </div>

                    {/* menus */}
                    <div className="col d-flex align-items-center justify-content-end">

                        {/* avatar */}
                        <div className="align-items-center d-none d-xl-flex justify-content-center">
                            <img className="rounded-circle me-2" src={user.result.picture} alt=""
                                style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                            />

                            <p className="m-0">{user.result.name}</p>
                        </div>

                        {/* main menu */}
                        <div className="align-items-center bg-gray d-flex justify-content-center mx-2 p-1 rounded-circle"
                            type="button" id="mainMenu"
                            style={{ width: '38px', height: '38px' }}>

                            <i className="fas fa-ellipsis-h" />
                        </div>

                        {/* chat */}
                        <div className="align-items-center bg-gray d-flex justify-content-center mx-2 p-1 rounded-circle"
                            type="button" id="chatMenu"
                            style={{ width: '38px', height: '38px' }}>

                            <i className="fas fa-comment" />
                        </div>

                        {/* notifications */}
                        <div className="align-items-center bg-gray d-flex justify-content-center mx-2 p-1 rounded-circle"
                            type="button" id="notMenu"
                            style={{ width: '38px', height: '38px' }}>

                            <i className="fas fa-bell" />
                        </div>

                        {/* secondary menu */}
                        <div className="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center mx-2"
                            type="button" id="secondMenu"
                            aria-expanded="false"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            style={{ width: '38px', height: '38px' }}>

                            <i className="fas fa-caret-down" />
                        </div>

                        {/* secondary menu dd */}
                        <ul className="border-0 dropdown-menu p-3 shadow"
                            aria-labelledby="secondMenu"
                            style={{ width: '23em' }}>

                            {/* avatar */}
                            <li className="dropdown-item p-1 rounded d-flex" type="button">
                                <img src={user.result.picture} className="rounded-circle me-2" alt=""
                                    style={{ width: '38px', height: '38px', objectFit: 'cover' }} />

                                <div>
                                    <p className="m-0">{user.result.name}</p>
                                    <p className="m-0 text-muted">See your profile</p>
                                </div>
                            </li>

                            <hr />

                            {/* feedback */}
                            <li className="dropdown-item p-1 rounded d-flex align-items-center" type="button">
                                <i className="fas fa-exclamation-circle bg-gray p-2 rounded-circle" />

                                <div className="ms-3">
                                    <p className="m-0">Give Feedback</p>
                                    <p className="m-0 text-muted fs-7">
                                        Help us improve the Facebook.
                                    </p>
                                </div>
                            </li>

                            <hr />

                            {/* options */}
                            <li className="dropdown-item my-3 p-1 rounded" type="button">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <div className="d-flex">
                                            <i className="fas fa-cog bg-gray p-2 rounded-circle" />

                                            <div className="align-items-center d-flex justify-content-between ms-3 w-100">
                                                <p className="m-0">Settings &amp; Privacy</p>
                                                <i className="fas fa-chevron-right" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li className="dropdown-item my-3 p-1 rounded" type="button">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <div className="d-flex">
                                            <i className="fas fa-question-circle bg-gray p-2 rounded-circle" />

                                            <div className="align-items-center d-flex justify-content-between ms-3 w-100">
                                                <p className="m-0">Help &amp; Support</p>
                                                <i className="fas fa-chevron-right" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li className="dropdown-item my-3 p-1 rounded" type="button">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <div className="d-flex">
                                            <i className="fas fa-moon bg-gray p-2 rounded-circle" />

                                            <div className="align-items-center d-flex justify-content-between ms-3 w-100">
                                                <p className="m-0">Display &amp; Accessibility</p>
                                                <i className="fas fa-chevron-right" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li className="dropdown-item my-3 p-1 rounded" type="button" onClick={logout}>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <div className="d-flex">
                                            <i className="fas fa-sign-out-alt bg-gray p-2 rounded-circle" />

                                            <div className="align-items-center d-flex justify-content-between ms-3 w-100">
                                                <p className="m-0">Log Out</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appbar
