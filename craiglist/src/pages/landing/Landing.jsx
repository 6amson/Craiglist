import './landing.scss';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../../components/header/Header';
import World from '../../assets/World'

export default function Footer() {
    return (
        <div className='container'>
            <div className='header'>
                <Header />
            </div>

            <div className='heropage'>
                <div className='heropage_Left'>
                    <div className='firstDiv'>
                        <p>Craiglist, the perfect <span>user-centric </span>platfrom</p>
                    </div>

                    <div className='secondDiv'>
                        <p>Searching for a platfrom that serves you?
                            look no further. Explore jobs,  gigs, houses, and lots more.
                            All on craiglist.
                        </p>
                    </div>

                    <div className='thirdDiv'>
                        <div>
                            <p>Create posting</p>
                            <span class="material-symbols-outlined">
                                north_east
                            </span>
                        </div>
                        <div><p>Register</p></div>
                    </div>

                    <div className='fourthDiv'>
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

                <div className='heropage_Right'>
                    <div className='mainPhoto1'></div>
                    <div className='mainPhoto2'></div>
                    <div className='mainPhoto3'></div>
                </div>

                <div className='world'>
                    <World fill="red" />
                </div>
            </div>
        </div>
    )
}