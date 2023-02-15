import React from 'react'
import "./header.css"

const Header = () => {
    return (
        <>

            <div className='header_content'>
                <div className='header_nested'>
                    <div className='nav_bar'>
                        <ul>
                            <li>Investor Relations</li>
                            <li>Add Restaurants</li>
                            <li>Login</li>
                            <li>Sign up</li>
                        </ul>
                    </div>
                    <div className='header_center'>
                        <div className='center_nested_text'>
                            <div className='zomato_img'><img src="	https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" /></div>
                            <div className='zomato_line'> <p3>Discover the best food & drinks in Pune
                                </p3></div>

                                <div className='main_zomato_border'> 
                            <div className='zomato_search_bar'>
                                <div className='left_side_search'>
                                    <span class="material-symbols-outlined">
                                        location_on
                                    </span>
                                    <h2>Pune</h2>
                                </div>
                                <div className='search_bar'>
                                    <div className='br_right'></div>
                                    <div className='search_icon'>
                                        <span class="material-symbols-outlined">
                                            search
                                        </span>
                                    </div>
                                    <div className='input_search_bar'>
                                        <input type="text" placeholder='Search for Restaurants,cuisine or a dish' />
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

export default Header