import './footer.scss';
import '../../pages/landing/landing.scss';
import apple from '../../assets/logo/Apple_Store-Logo.wine.svg'
import google from '../../assets/logo/Google_Play-Icon-Logo.wine.svg'
import { useEffect, useRef } from 'react'


export default function Footer() {
    return (
        <footer>
            <div className='footerDiv'>
                <div className='footerDivUl'>
                    <div>
                        <ul>
                            <li>About</li>
                            <li>About craiglist</li>
                            <li>Privacy policy</li>
                            <li>Terms of use</li>
                            <li>system status</li>
                            <li>open source</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li>Security</li>
                            <li>Help</li>
                            <li>Legal</li>
                            <li>FAQs</li>
                            <li>Avoid scam and fraud</li>
                            <li>Personal safety tips</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li>Blog</li>
                            <li>Craiglist Joe</li>
                            <li>Best of craiglist</li>
                            <li>Criaglist Newmark</li>
                            <li>Philantropy</li>
                            <li>Craiglist app</li>
                        </ul>
                    </div>
                </div>

                <div className='footerDivSec'>
                    <p>Craiglist app</p>
                    <div className='footerDivSec1'>
                        <div className='footerDicSec2'>
                            <div className='footerDicSec1ba'>
                                <div className='sixthDiv1baPhoto'><img src={google} /></div>
                                <div>
                                    <p>Get it on</p>
                                    <p>Google play</p>
                                </div>
                            </div>

                            <div className='footerDicSec1bb'>
                                <div><img src={apple} className='sixthDiv1bbPhoto' /></div>
                                <div>
                                    <p>Download on</p>
                                    <p>App store</p>
                                </div>
                            </div>
                        </div>

                        <div className='footerDicSec1bc'>
                            <div>
                                All rights reserved
                            </div>
                            <div>
                            &copy; craiglist 2023
                            </div>
                        </div>

                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}