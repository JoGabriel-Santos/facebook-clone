import React from 'react'

function Timeline() {
    let rows = [], i = 1, len = 6
    while (++i <= len) rows.push(i)

    return (
        <section>

            {/* Stories */}
            <div className="d-flex justify-content-between mt-5 position-relative">

                {/* S 1 */}
                <div className="bg-white mx-1 rounded story" type="button" style={{ width: '6em', height: '190px' }}>
                    <img className="card-img-top" src="https://source.unsplash.com/collection/happy-people" alt="story posts"
                        style={{ minHeight: '125px', objectFit: 'cover' }}
                    />

                    <div className="align-items-center d-flex justify-content-center position-relative" style={{ minHeight: '65px' }}>
                        <p className="fs-7 fw-bold mb-0 text-center">Create Story</p>

                        <div className="position-absolute start-50 top-0 translate-middle">
                            <i className="fas fa-plus-circle fs-3 bg-white p-1 rounded-circle text-primary" />
                        </div>
                    </div>
                </div>

                {
                    rows.map(index => (
                        <div className="rounded mx-1 story" type="button" style={{ width: '6em', height: '190px' }} key={index}>

                            <img className="card-img-top rounded" src={'https://source.unsplash.com/random/' + index} alt="story posts"
                                style={{ minHeight: '190px', objectFit: 'cover' }} />
                        </div>
                    ))
                }

                {/* Next icon */}
                <div className="d-lg-block d-none pointer position-absolute start-100 top-50 translate-middle">
                    <i className="fas fa-arrow-right bg-white border p-3 rounded-circle text-muted" />
                </div>
            </div>
        </section>
    )
}

export default Timeline
