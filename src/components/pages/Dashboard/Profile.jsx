import React from 'react'
import SideNav from '../../Dashboard/SideNav'
import MobileNav from '../../Dashboard/MobileNav'
import Header from '../../Dashboard/Header'

function Profile() {
    return (
        <>
            {/* <div className='mobile-view'>
                <MobileNav />
                <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card mb-4 border-0 rounded-3 shadow-lg">
                                    <div className="card-body text-center">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                            className="rounded-circle img-fluid" />
                                        <h5 className="my-3 fs-3 fw-bold">John Smith</h5>
                                        <p className="text-muted mb-1">Full Stack Developer</p>
                                        <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                        <div className="d-flex justify-content-center mb-2">
                                            <button type="button" className="btn-common text-white fw-bold rounded-3">My Jobs</button>
                                            <button type="button" className="btn btn-outline-secondary ms-2">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card mb-4 border-0 rounded-3 shadow-lg">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0 fw-bold">Full Name</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">Johnatan Smith</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0 fw-bold">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">example@example.com</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0 fw-bold">Phone</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">(097) 234-5678</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0 fw-bold">Mobile</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">(098) 765-4321</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0 fw-bold">Address</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card mb-4 mb-md-0 border-0 rounded-3 shadow-lg">
                                            <div className="card-body">
                                                <p className="mb-4 fs-5 fw-bold">Key Skills</p>
                                                <p className="mb-1">Web Design</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="80"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1">Website Markup</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="72"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1">One Page</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="89"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1">Mobile Template</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="55"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1">Backend API</p>
                                                <div className="progress rounded mb-2">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="66"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mb-4 mb-md-0 border-0 rounded-3 shadow-lg">
                                            <div className="card-body">
                                                <p className="mb-4 fs-5 fw-bold">Project Status</p>
                                                <p className="mb-1">Web Design</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="80"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1">Website Markup</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="72"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1">One Page</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="89"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1">Mobile Template</p>
                                                <div className="progress rounded">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="55"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1">Backend API</p>
                                                <div className="progress rounded mb-2">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="66"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div> */}

            <div className='container-fluid desktop-view'>
                <div className='row'>
                    <Header />
                    <div className='col-md-2 sidenav-bg'>
                        <SideNav />
                    </div>
                    <div className='col-md-10'>
                        <section>
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="card mb-4 border-0 rounded-3 shadow-lg">
                                            <div className="card-body text-center">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                                    className="rounded-circle img-fluid" />
                                                <h5 className="my-3 fs-3 fw-bold">John Smith</h5>
                                                <p className="text-muted mb-1">Full Stack Developer</p>
                                                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                                <div className="d-flex justify-content-center mb-2">
                                                    <button type="button" className="btn-common text-white fw-bold rounded-3">My Jobs</button>
                                                    <button type="button" className="btn btn-outline-secondary ms-2">Edit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="card mb-4 border-0 rounded-3 shadow-lg">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0 fw-bold">Full Name</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">Johnatan Smith</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0 fw-bold">Email</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">example@example.com</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0 fw-bold">Phone</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">(097) 234-5678</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0 fw-bold">Mobile</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">(098) 765-4321</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0 fw-bold">Address</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="card mb-4 mb-md-0 border-0 rounded-3 shadow-lg">
                                                    <div className="card-body">
                                                        <p className="mb-4 fs-5 fw-bold">Key Skills</p>
                                                        <p className="mb-1">Web Design</p>
                                                        <div className="progress rounded">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="80"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <p className="mt-4 mb-1">Website Markup</p>
                                                        <div className="progress rounded">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="72"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <p className="mt-4 mb-1">One Page</p>
                                                        <div className="progress rounded">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="89"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <p className="mt-4 mb-1">Mobile Template</p>
                                                        <div className="progress rounded">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="55"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <p className="mt-4 mb-1">Backend API</p>
                                                        <div className="progress rounded mb-2">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="66"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card mb-4 mb-md-0 border-0 rounded-3 shadow-lg">
                                                    <div className="card-body">
                                                        <p className="mb-4 fs-5 fw-bold">Project Status</p>
                                                        <p className="mb-1">Web Design</p>
                                                        <div className="progress rounded">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="80"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <p className="mt-4 mb-1">Website Markup</p>
                                                        <div className="progress rounded">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="72"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <p className="mt-4 mb-1">One Page</p>
                                                        <div className="progress rounded">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="89"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <p className="mt-4 mb-1">Mobile Template</p>
                                                        <div className="progress rounded">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="55"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <p className="mt-4 mb-1">Backend API</p>
                                                        <div className="progress rounded mb-2">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="66"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile