import React from 'react';

const Corousel = () => {
    return (
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src="https://img.freepik.com/premium-photo/portrait-attractive-middle-aged-business-woman-blue-background_1429-10287.jpg?size=626&ext=jpg&uid=R89448480&ga=GA1.1.1898537034.1698707937&semt=ais" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://img.freepik.com/free-photo/young-businesswoman-blue-dress_144627-28133.jpg?size=626&ext=jpg&uid=R89448480&ga=GA1.1.1898537034.1698707937&semt=ais" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://img.freepik.com/free-photo/portrait-sensual-blonde-business-woman-dressed-formal-suit-blue-shirt-isolated-dark-background_613910-6341.jpg?size=626&ext=jpg&uid=R89448480&ga=GA1.1.1898537034.1698707937&semt=ais" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Corousel;