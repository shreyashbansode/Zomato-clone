import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <>

            <section>

                <div className="section_footer">
                    <div className="zomato_img_footer">
                        <img src="	https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="err" />
                    </div>
                    <div className="flag">
                        <div>
                            <span>India</span>
                        </div>
                        <div>
                            <span>English</span>
                        </div>
                    </div>
                </div>
                <div className="nested_section">
                    <div className="center_bx">
                        <div className='footer_links'>

                            <h6>ABOUT ZOMATO</h6>
                            <p>Who Were Are</p>
                            <p>Blog</p>
                            <p>Work With Us</p>
                            <p>Investor Relations</p>
                            <p>Report Fraud</p>
                            <p>Contact Us</p>
                        </div>
                        <div className='footer_links'>
                            <h6>ZOMAVERSE</h6>
                            <p> Zomato</p>
                            <p>Blinkit</p>
                            <p>Feeding india</p>
                            <p>hyperpure</p>
                            <p>Zomaland</p>

                        </div>
                        <div className='footer_links'>
                            <div>
                                <h6>FOR RESTAURANTS</h6>
                                <p>Partner With us</p>
                                <p>Apps For You</p>
                            </div>
                            <div className="footer_mr">
                                <h6>FOR ENTERPRISES</h6>
                                <p>Zomato For Work</p>
                            </div>

                        </div>
                        <div className='footer_links'>
                            <h6>LEARN MORE</h6>
                            <p>Privacy</p>
                            <p>Security</p>
                            <p>Terms</p>
                            <p>Sitemap</p>

                        </div>
                        <div className='footer_links'>
                            <h6>SOCIAL LINKS</h6>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Footer