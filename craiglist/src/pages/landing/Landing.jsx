import './landing.scss';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../../components/header/Header';
import World from '../../assets/World'
import { jobs, services, houses, sale } from './utils/schema';
import engineer from '../../assets/logo/engineer.svg';
import house from '../../assets/logo/house.svg'



export default function Footer() {
    const isSmallerScreen = useMediaQuery({ query: '(max-width: 500px)' });
    // const [selectedOption, setSelectedOption] = useState('');
    const [liElement, setLiElement] = useState('jobs');

    const li_jobs = useRef(null);
    const ulRef = useRef(null);
    const available = useRef(null);
    let status;
    let color;

    // console.log(selectedOption);

    switch (status) {
        case 'red':
            color = 'red';
            break;
        case 'green':
            color = 'green';
            break;
        default:
            color = 'grey';
            break;

    }

    const handleOptionChange = (event) => {
        setLiElement(event.target.value);
        event.target.style.color = '#4f4fff';

        if (event.target.value == liElement) {
            return;
        }

    };


    const styleObj = {
        color: color,
    };



    useEffect(() => {
        if (li_jobs.current || available.current) {

            li_jobs.current.classList.add('highlight');
        }
        if (liElement == 'services') {
            // Object.values(services).map((item) => {
            //     console.log(item.availability);
            // })


        }


    }, [])

    let display;
    if (liElement == 'jobs') {
        const newArray = Object.values(jobs).slice(0, 8);
        display =
            <div>
                {
                    <div className='exploreTemplateContainer'>
                        {
                            newArray.map((job) => (
                                <div className='exploreTem' key={job.id}>
                                    <div className='exploreTem1'>
                                        <div className='exploreTem1a'>
                                            <img src={job.photo} />
                                            <p>{job.company}</p>
                                        </div>

                                        <div className='exploreTem1b'>
                                            <p>{job.rating}</p>
                                            <span class="material-symbols-outlined star">
                                                star_rate
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className='exploreTem3'>{job.position}</h3>
                                    <p className='exploreTem4'>{job.state}</p>
                                    <div className='exploreTem5'>
                                        <p>{job.jobsAvailable}+jobs</p>
                                        <span class="material-symbols-outlined work">
                                            work
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                }
            </div>
    } else if (liElement == 'services') {
        const newArray = Object.values(services).slice(0, 8);
        display =
            <div>
                {
                    <div className='exploreTemplateContainer'>
                        {
                            newArray.map((job) => (

                                <div className='exploreTem' key={job.id}>
                                    <div className='exploreTem1'>
                                        <div className='exploreTem1a'>
                                            <img className='ImageExplore' src={engineer} />
                                            <p>{job.provider}</p>
                                        </div>

                                        <div className='exploreTem1b'>
                                            <p>{job.rating}</p>
                                            <span class="material-symbols-outlined star">
                                                star_rate
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className='exploreTem3'>{job.service}</h3>
                                    <p className='exploreTem4'>{job.location}</p>
                                    <div className='exploreTem5'>
                                        <p className='exploreTem5Para'>{job.price}/hr<span className='exploreTem5Span'>.</span></p>
                                        <p style={styleObj} ref={available}>{job.availability}</p>
                                        <span class="material-symbols-outlined plumbing">
                                            Construction
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                }
            </div>
    } else if (liElement == 'houses') {
        const newArray = Object.values(houses).slice(0, 8);
        display =
            <div>
                {
                    <div className='exploreTemplateContainer'>
                        {
                            newArray.map((job) => (
                                <div className='exploreTem' key={job.id}>
                                    <div className='exploreTem1'>
                                        <div className='exploreTem1a'>
                                            <span class="material-symbols-outlined exploreHouse">
                                                house
                                            </span>
                                            <p>{job.status}</p>
                                        </div>

                                        <div className='exploreTem1b'>
                                            <p>{job.rating}</p>
                                            <span class="material-symbols-outlined star">
                                                star_rate
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className='exploreTem3'>{job.house}</h3>
                                    <p className='exploreTem4'>{job.address}, {job.state}.</p>
                                    <div className='exploreTem5'>
                                        <p>N{job.price} <span>.</span>{job.available} available</p>
                                        <span class="material-symbols-outlined plumbing">
                                            real_estate_agent
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                }
            </div>
    }



    function changeHighlight(e) {
        //form an array from the ul childnodes
        const liElements = Array.from(ulRef.current.childNodes);

        //get the value of eventTarget's name attribute
        const current = e.target.attributes[0].nodeValue;

        //check if element set in state is the same value as current
        if (liElement == current) {

            //keep the highlight class
            return;
        } else {
            //map through the childnodes of li elements
            liElements.map((li) => {

                //for any child with a class
                if (li.attributes.class) {

                    //for any child whose name attribute is not same as current 
                    if (li.attributes[0].nodeValue !== current) {

                        //remove the highlight
                        li.classList.remove('highlight');

                        //add highlight classlist to the current target
                        e.target.classList.add('highlight');

                    }
                }

            })

        }

        setLiElement(current);
    }


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
                    <span class="material-symbols-outlined auto_awesome">
                        auto_awesome
                    </span>
                    <h2>Explore our offerings</h2>
                    <p>
                        Welcome to the explore page where you can see
                        all our offerings in different sections ranging from
                        house sales, gigs, latest jobs, forums, and much more.
                    </p>
                </div>

                <div className='explore_Div2'>
                    {
                        isSmallerScreen ?
                            <div>
                                <select value={liElement} onChange={handleOptionChange}>
                                    <option value="jobs">Jobs</option>
                                    <option value="houses">Houses</option>
                                    <option value="services">Services</option>
                                    <option value="sale">For sale</option>
                                    <option value="comm">Community</option>
                                    <option value="forum">Forum</option>
                                </select>
                            </div>
                            :
                            <div><ul ref={ulRef}>
                                <li ref={li_jobs} name='jobs' onClick={changeHighlight}>Jobs</li>
                                <li name='houses' onClick={changeHighlight}>Houses</li>
                                <li name='services' onClick={changeHighlight}>Services</li>
                                <li name='sale' onClick={changeHighlight}>For sale</li>
                                <li name='comm' onClick={changeHighlight}>Community</li>
                                <li name='forum' onClick={changeHighlight}>Forum</li>
                            </ul></div>
                    }
                </div>

                <div className='explore_Div3'>
                    <p>{liElement} posted within the last 24hrs</p>
                    <input
                        type='text'
                        id="Secsearch"
                        name="search"
                        placeholder='Search craiglist...'
                    />
                    <span class="material-symbols-outlined Seclens">
                        search
                    </span>
                </div>

                <div className='explore_Div4'>
                    {
                        display
                    }
                </div>
            </div>
        </div>
    )
}