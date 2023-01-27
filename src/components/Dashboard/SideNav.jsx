import React from 'react'
import { MdSpaceDashboard, MdSupervisedUserCircle, MdWork, MdOutlineForwardToInbox, MdDynamicForm } from 'react-icons/md';
import './dashboard.css'
function SideNav() {
    return (
        <>
            <ul className="nav flex-column p-2 side-nav">
                <li className="nav-item">
                    <button type="button" className="btn btn-nav d-flex justify-content-start align-items-baseline w-100">
                        <a href='/dashboard' className='fs-5 text-decoration-none text-white'><span className='fs-4 me-2'><MdSpaceDashboard /></span>Dashboard</a>
                    </button>
                </li>
                <li className="nav-item">
                    <button type="button" className="btn btn-nav d-flex justify-content-start align-items-baseline w-100">
                        <a href='/profile' className='fs-5 text-decoration-none text-white'><span className='fs-4 me-2'><MdSupervisedUserCircle /></span>Profile</a>
                    </button>
                </li>
                <li className="nav-item">
                    <button type="button" className="btn btn-nav d-flex justify-content-start align-items-baseline w-100">
                        <a href='/quiz' className='fs-5 text-decoration-none text-white'><span className='fs-4 me-2'><MdWork /></span>Quiz</a>
                    </button>
                </li>
                <li className="nav-item">
                    <button type="button" className="btn btn-nav d-flex justify-content-start w-100">
                        <a href='/' className='fs-5 text-decoration-none text-white'><span className='fs-4 me-2'><MdOutlineForwardToInbox /></span>Inbox</a>
                    </button>
                </li>
                <li className="nav-item">
                    <button type="button" className="btn btn-nav d-flex justify-content-start w-100">
                        <a href='/postjob' className='fs-5 text-decoration-none text-white'><span className='fs-4 me-2'><MdDynamicForm /></span>Post Job</a>
                    </button>
                </li>
            </ul>
        </>
    )
}

export default SideNav