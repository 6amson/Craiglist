import './landing.scss';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../../components/header/Header';
import main1 from '../../assets/main1.jpg';
import main2 from '../../assets/main2.jpg';
import main3 from '../../assets/main3.jpg';
import World from '../../assets/World'

export default function Footer() {
    return (
        <div className='container'>
            <div className='header'>
                <Header />
            </div>

            <div className='heropage'>
                <div className='heropage_Right'>
                    <div>
                        <p>Craiglist, the perfect <span>user-centric </span>platfrom</p>
                    </div>

                    <div>
                        <p>Searching for a platfrom that serves you?
                            look no further. Explore jobs,  gigs, houses, and lots more.
                            All on craiglist.
                        </p>
                    </div>

                    <div>
                        <div><p>Create posting</p>
                            <span class="material-symbols-outlined">
                                north_east
                            </span>
                        </div>
                        <div><p>Register</p></div>
                    </div>

                    <div>
                        <div>
                            <span class="material-symbols-outlined language">
                                language
                            </span>
                            <p>70M</p>
                            <p>countries</p>
                        </div>
                        <div>
                            <span class="material-symbols-outlined language">
                                groups
                            </span>
                            <p>250M</p>
                            <p>Active users</p>
                        </div>
                    </div>
                </div>

                <div className='heropage_Left'>
                    <div><img src={main1}/></div>
                    <div><img src={main2}/></div>
                    <div><img src={main3}/></div>
                </div>

                <div className='world'>
                    <World fill="red" />
                </div>
            </div>
        </div>
    )
}