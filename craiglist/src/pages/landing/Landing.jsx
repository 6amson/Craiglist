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
                        <p>Craiglist, the perfect <span>user-centric </span>platfrom.</p>
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

            <div className='explore_Div'>
                <div className='explore_Div1'>
                    <span class="material-symbols-outlined">
                        auto_awesome
                    </span>
                    <p>Explore our offerings</p>
                    <p>
                        Welcome to the explore page where you can see
                        all our offerings in different sections ranging from
                        house sales, gigs, latest jobs, forums, and much more.
                    </p>
                </div>

                <div>
                    <ul>
                        <li>Jobs</li>
                        <li>Houses</li>
                        <li>Services</li>
                        <li>For sale</li>
                        <li>Community</li>
                        <li>Forum</li>
                    </ul>
                </div>

                <div>
                    <p>Jobs posted within the last 24hrs</p>
                    <input
                        type='text'
                        id="Secsearch"
                        name="search"
                        placeholder='Search for jobs...'
                    />
                    <span class="material-symbols-outlined eclens">
                        search
                    </span>
                </div>
            </div>
        </div>
    )
}