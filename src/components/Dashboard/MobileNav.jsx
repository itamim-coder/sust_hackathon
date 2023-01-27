import React from 'react'
import SideNav from './SideNav';
import { FaBars, FaForumbee } from 'react-icons/fa';
import './dashboard.css'
function MobileNav() {
    const ProfilePic = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1666274295~exp=1666274895~hmac=0fb8a3a693608581b6bf002c04354b3fc84c6b8d2790137458e8eefba7d925cf"
    return (
        <>
            <div className="container-fluid d-flex justify-content-between align-items-center py-1 header-container">
                <div className='d-flex justify-content-start align-items-center'>
                    <div>
                        <button className="btn btn-link text-decoration-none text-white fs-5 ml-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><FaBars /></button>
                        <div className="offcanvas offcanvas-start mobile-menu" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title text-decoration-none text-white" id="offcanvasWithBothOptionsLabel"><FaForumbee /> ErrandBee</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <SideNav />
                            </div>
                        </div>
                    </div>
                    <a className="text-white text-decoration-none fs-4 fw-bold" href="#"><FaForumbee /> ErrandBee</a>
                </div>
                <div className="btn-group dropstart">
                    <button type="button" className="btn btn-link dropdown-toggle text-white" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                        <img src={ProfilePic} className="img-thumbnail rounded-circle profile-pic" alt="profilePic" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-lg-end border-0 rounded-3 shadow-lg sub-menu">
                        <li><button className="btn btn-nav text-white d-flex justify-content-start w-100" type="button">Action</button></li>
                        <li><button className="btn btn-nav text-white d-flex justify-content-start w-100" type="button">Another action</button></li>
                        <li><button className="btn btn-nav text-white d-flex justify-content-start w-100" type="button">Something else</button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav