import React from 'react'
// import jobData from '../../FakeData/Jobs'

function Jobs() {
    return (
        <>
            <div className='container my-3'>
                <p className='common-title text-center fs-2 fw-bold my-3'>Recent Jobs</p>
                {
                    jobData.map(job => {
                        return (
                            <div className="card my-5 border-0 rounded-3 shadow-lg" key={job.id}>
                                <h3 className="card-header">{job.jobTitle}</h3>
                                <div className="card-body">
                                    <h5 className="card-title">{job.category}</h5>
                                    <p className="card-text">{job.description}</p>
                                    <h5 className="card-title">Skills: <span className='fw-normal'>{job.skills}</span></h5>
                                    <h4 className="card-title">{job.budget}</h4>
                                    <button className="btn-common text-white fw-bold rounded-3 mt-2">Apply</button>
                                </div>
                                <div className="card-footer text-muted">
                                    2 days ago
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Jobs