import React from 'react'
import "./AppContent.css"

const AppContent = () => {
    return (
        <>
            <div className="get_container">
                <div className="nested_get">
                    <div className="left_side">
                        <div className="left_img">
                            <img src="/assets/images/mobile.png" alt="err" />
                        </div>
                    </div>
                    <div className="right_side">
                        <div className='nested_side'>
                            <h5>Get The Zomato App</h5>
                            <p>We will send you a link, open it on your phone to download the app</p>
                            <div className='btns'>
                                <div className='btn1'>
                                    <input type="radio" />
                                    <label htmlFor="">Email</label>
                                </div>
                                <div className='btn2'>
                                    <input type="radio" />
                                    <label htmlFor="">Phone</label>
                                </div>
                            </div>
                            <div>
                                <div className='Email'>
                                    <input type="text" placeholder='Email' />
                                    <button>Share App Link</button>
                                </div>
                            </div>
                            <p>Download app from</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Explore_content">
                <div className="Explore_nested">
                    <div className="Explore_title">
                        <p>Explore options near me</p>

                    </div>
                    <div className='bx'>
                        <div className='exp_title'><h5>Popular cuisines near me</h5></div>
                        <div className="Explore_Expand"><span class="material-symbols-outlined">
                            expand_more
                        </span></div>
                    </div>
                    <div className='bx'>
                        <div className='exp_title'><h5>Popular restaurant types near me</h5></div>
                        <div className="Explore_Expand"><span class="material-symbols-outlined">
                            expand_more
                        </span></div>
                    </div>
                    <div className='bx'>
                        <div className='exp_title'><h5>Top Restaurant Chains</h5></div>
                        <div className="Explore_Expand"><span class="material-symbols-outlined">
                            expand_more
                        </span></div>
                    </div>
                    <div className='bx'>
                        <div className='exp_title'><h5>Top Restaurant Chains</h5></div>
                        <div className="Explore_Expand"><span class="material-symbols-outlined">
                            expand_more
                        </span></div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default AppContent