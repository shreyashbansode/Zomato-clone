import React from 'react'
import "./location.css"

const Locations = () => {
    return (
        <>
            <div className="section">
                <div className="Title">
                    <p>Popular localities in and around</p>
                    <span>Pune</span>

                </div>
                <div className=' city_content'>
                    <div className="city_bx  ">

                        <div className='city_names'>
                            <div className="city_names_nested">
                                <h5>Baner</h5>
                                <p>480 places</p>
                            </div>

                        </div>
                        <div className='city_names'>
                            <div className="city_names_nested">

                                <h5>Viman Nagar</h5>
                                <p>464 places</p>
                            </div>

                        </div>
                        <div className='city_names'>
                            <div className="city_names_nested">
                                <h5>Hinjwadi</h5>
                                <p>265 places</p>
                            </div>
                        </div>
                        <div className='city_names'>
                            <div className="city_names_nested">
                                <h5>Koregaon Park</h5>
                                <p>181 places</p>
                            </div>

                        </div>
                        <div className='city_names'>
                            <div className="city_names_nested">
                                <h5>Wakad</h5>
                                <p>265 places</p>
                            </div>
                        </div>
                        <div className='city_names'>
                            <div className="city_names_nested">
                                <h5>Kothrud</h5>
                                <p>591 places</p>
                            </div>
                        </div>
                        <div className='city_names'>
                            <div className="city_names_nested"> <h5>Kalnyani Nagar</h5>
                                <p>124 places</p></div>
                        </div>
                        <div className='city_names'>
                            <div className="city_names_nested">
                                <h5>Kharadi</h5>
                                <p>539 places</p>
                            </div>
                        </div>
                        <div className='city_names'>
                            <div className="city_names_nested">
                                <h5>See more</h5>
                            </div>
                            {/* <p>539 places</p> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Locations