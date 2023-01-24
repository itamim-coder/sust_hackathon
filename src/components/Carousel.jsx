import React from 'react'

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/free-psd/e-learning-banner-design-template_23-2149113593.jpg?w=2000" className="d-block w-100" alt="banner" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-psd/e-learning-concept-banner-template_23-2148688190.jpg?w=2000" className="d-block w-100" alt="banner" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-psd/e-learning-banner-template-design_23-2149120984.jpg?w=2000" className="d-block w-100" alt="banner" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel