import React from 'react'
import { useHistory } from 'react-router-dom'

import Navbar from './Navbar'
import Sidebar from './Feed/Sidebar'
import Timeline from './Feed/Timeline'
import Chatbar from './Feed/Chatbar'

function Home() {
    const user = JSON.parse(localStorage.getItem('profile'))
    const history = useHistory()

    return (
        <section className="position-relative">

            {
                user ? (

                    <>
                        <Navbar />

                        <div className="container-fluid">
                            <div className="justify-content-evenly row">

                                <Sidebar />
                                <Timeline />
                                <Chatbar />
                            </div>
                        </div>
                    </>

                ) : history.push('/auth')
            }

        </section>
    )
}

export default Home
