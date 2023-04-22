import './header.scss';
import { useEffect, useRef, useState } from 'react';
import types, { useMediaQuery } from 'react-responsive';
import flag from '../../assets/flag.png'



export default function Header() {

    const isMediumScreen = useMediaQuery({ query: '(max-width: 965px)' });
    const isSmallScreen = useMediaQuery({ query: '(max-width: 700px)' });

    const [menuOpen, setMenuOpen] = useState('');

    return (

        <div className='header_container'>
            {
                isSmallScreen && isMediumScreen ? (
                    <header>
                        <div className='logoFont'>
                            <h1>Craiglist</h1>
                        </div>
                        <div className='textSmallDiv'>
                            <div>
                                {
                                    menuOpen ? (
                                        <span class="material-symbols-outlined close">
                                            close
                                        </span>
                                    ) : (
                                        <span class="material-symbols-outlined menu">
                                            menu
                                        </span>
                                    )}
                                <img alt='spain flag' className='flag' src={flag} />
                            </div>
                        </div>
                    </header>
                ) : isMediumScreen ? (
                    <header>
                        <div className='logoFont'>
                            <h1>Craiglist</h1>
                        </div>

                        <div className='textMediumDiv'>
                            <div>
                                <input
                                    type='text'
                                    id="search"
                                    name="search"
                                    placeholder='Search craiglist...'
                                />
                                <span class="material-symbols-outlined lens">
                                    search
                                </span>
                            </div>

                            <div>
                                {
                                    menuOpen ? (
                                        <span class="material-symbols-outlined close">
                                            close
                                        </span>
                                    ) : (
                                        <span class="material-symbols-outlined menu">
                                            menu
                                        </span>
                                    )}
                                <img alt='spain flag' className='flag' src={flag} />
                            </div>
                        </div>
                    </header>
                ) : (
                    <header>
                        <div className='logoFont'>
                            <h1>Craiglist</h1>
                        </div>

                        <div className='textDiv'>
                            <div>
                                <input
                                    type='text'
                                    id="search"
                                    name="search"
                                    placeholder='Search craiglist...'
                                />
                                <span class="material-symbols-outlined lens">
                                    search
                                </span>
                            </div>
                            <div>
                                <ul>
                                    <li>Get app</li>
                                    <li>Posting</li>
                                    <li>My account</li>
                                    <li>English <span class="material-symbols-outlined down">
                                        keyboard_arrow_down
                                    </span></li>
                                </ul>
                            </div>
                            <div>
                                <img alt='spain flag' className='flag' src={flag} />
                            </div>
                        </div>
                    </header>
                )
            }
        </div>
    )
}