import React from 'react'

const ContactInfo = () => {
    return (
        <>
            <section className="fdb-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-12 col-lg-6 col-xl-5">
                            <h1>Contact Info</h1>
                            <p className="lead mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                            <p><strong>Social Links:</strong></p>
                            <p className="h1 text-muted">
                                <i className="fab fa-chrome mr-3"></i>
                                <i className="fab fa-safari mr-3"></i>
                                <i className="fab fa-firefox mr-3"></i>
                                <i className="fab fa-edge"></i>
                            </p>
                        </div>
                        <div className="col-12 col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0">
                            <img alt="image" className="img-fluid" src="https://img.freepik.com/free-vector/hand-drawn-contact-information-background-template_23-2148189661.jpg?w=2000" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactInfo