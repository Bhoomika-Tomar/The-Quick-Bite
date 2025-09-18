import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets (2)'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.quick_bite} />
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla labore, tempore fuga sequi totam expedita consectetur illo quasi voluptatem? Debitis, odio. Reiciendis enim pariatur accusamus necessitatibus eius voluptate totam placeat?</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='footer-content-center'>
                     <h2> COMPANY</h2>
                    <ul>
                         <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                          <li>Privacy policy</li>
                    </ul>

                </div>
                <div className='footer-content-right'>
                    <h2> GET IN TOUCH</h2>
                    <ul>
                        <li>+91-7669089907</li>
                        <li>thequickbite@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'> Copyright 2024 © TheQuickBite.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
