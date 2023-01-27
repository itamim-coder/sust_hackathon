import React from 'react'
import { AiFillProject, AiOutlineFileDone, AiFillDollarCircle } from 'react-icons/ai'
import SideNav from '../../Dashboard/SideNav'
import MobileNav from '../../Dashboard/MobileNav'
import Header from '../../Dashboard/Header'


function Dashboard() {
    return (
        <>
            {/* <div className='mobile-view'>
                <MobileNav />
                <div className='container-fluid pt-3'>
                    <div className='row g-4'>
                        <div className='col-md-4'>
                            <div className="card border-0 rounded-5 shadow-lg">
                                <div className="card-body">
                                    <h1 className="card-title fs-1 card-icon"><AiFillProject /></h1>
                                    <h6 className="card-subtitle fs-1 mb-2 text-muted">2</h6>
                                    <p className="card-text fs-5">Ongoing Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="card border-0 rounded-5 shadow-lg">
                                <div className="card-body">
                                    <h1 className="card-title fs-1 card-icon"><AiOutlineFileDone /></h1>
                                    <h6 className="card-subtitle fs-1 mb-2 text-muted">8</h6>
                                    <p className="card-text fs-5">Project Done</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="card border-0 rounded-5 shadow-lg">
                                <div className="card-body">
                                    <h1 className="card-title fs-1 card-icon"><AiFillDollarCircle /></h1>
                                    <h6 className="card-subtitle fs-1 mb-2 text-muted">$ 2010</h6>
                                    <p className="card-text fs-6">Total Earning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='container-fluid desktop-view'>
                <div className='row'>
                    <Header />
                    <div className='col-md-2 sidenav-bg'>
                        <SideNav />
                    </div>
                    <div className='col-md-10'>
                        <div className='container-fluid pt-3'>
                            <div className='row g-4'>
                                <div className='col-md-4'>
                                    <div className="card border-0 rounded-5 shadow-lg">
                                        <div className="card-body">
                                            <h1 className="card-title fs-1 card-icon"><AiFillProject /></h1>
                                            <h6 className="card-subtitle fs-1 mb-2 text-muted">2</h6>
                                            <p className="card-text fs-5">Ongoing Projects</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="card border-0 rounded-5 shadow-lg">
                                        <div className="card-body">
                                            <h1 className="card-title fs-1 card-icon"><AiOutlineFileDone /></h1>
                                            <h6 className="card-subtitle fs-1 mb-2 text-muted">8</h6>
                                            <p className="card-text fs-5">Project Done</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="card border-0 rounded-5 shadow-lg">
                                        <div className="card-body">
                                            <h1 className="card-title fs-1 card-icon"><AiFillDollarCircle /></h1>
                                            <h6 className="card-subtitle fs-1 mb-2 text-muted">$ 2010</h6>
                                            <p className="card-text fs-6">Total Earning</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard