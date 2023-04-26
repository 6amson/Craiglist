import './landing.scss';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../../components/header/Header';
import World from '../../assets/World'
import { jobs, services, houses, sale, Testimonials } from './utils/schema';
import engineer from '../../assets/logo/engineer.svg';
import sell from '../../assets/logo/sale.svg';
import forum from '../../assets/logo/forum.svg';
import comm from '../../assets/logo/community.svg';
import google from '../../assets/logo/Google_Play-Icon-Logo.wine.svg';
import apple from '../../assets/logo/Apple_Store-Logo.wine.svg';
import Footer from '../../components/footer/Footer';
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger'






export default function Landing() {
    const isSmallerScreen = useMediaQuery({ query: '(max-width: 500px)' });
    const isMediumScreen = useMediaQuery({ query: '(max-width: 623px)' });
    // const [selectedOption, setSelectedOption] = useState('');
    const [liElement, setLiElement] = useState('jobs');
    const [showMore, setShowMore] = useState(false);





    let display;
    let display2;
    let display3;

    const li_jobs = useRef(null);
    const ulRef = useRef(null);
    const available = useRef(null);



    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const handleOptionChange = (event) => {
        setLiElement(event.target.value);
        event.target.style.color = '#4f4fff';

        if (event.target.value == liElement) {
            return;
        }

    };

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 1 } });
        gsap.registerPlugin(ScrollTrigger);

        const mySplitText1 = new SplitType(".firstDivPara");

        if (li_jobs.current || available.current) {
            li_jobs.current.classList.add('highlight');
        }

        tl.to(".header", { duration: 1, backgroundColor: "#4f4fff", scale: 1, opacity: 1, })
            .to(".char", {
                y: 0,
                stagger: 0.05,
                delay: 0.2,
                duration: .1,
            })
            .to(".secondDiv", {
                y: 100,
                opacity: 1,
            })
            .to(".mainPhoto1", {
                y: -160,
                opacity: 1,
                ease: "easeOut"

            })
            .to(".thirdDiv", {
                y: -50,
                opacity: 1,
            })
            .to(".mainPhoto2", {
                y: 80,
                opacity: 1,
                duration: 1,
                ease: "Power1.easeIn"
            }, "-=2")
            .to(".mainPhoto3", {
                opacity: 1,
                duration: 1,
                ease: "Power1.easeInOut"
            }, "-=.5")




        gsap.to('.explore_Div1Para', {
            opacity: 1,
            duration: 1,
            x: -60,
            y: -60,
            duration: 1,
            ease: 'easeIn',
            scrollTrigger: {
                trigger: '.explore_Div1Para',
                start: "top 90%",
                end: "bottom 60%",
                scrub: true,
            }
        })


        gsap.to('.explore_Div1h2', {
            opacity: 1,
            duration: 1,
            y: -60,
            duration: 1,
            ease: 'easeIn',
            scrollTrigger: {
                trigger: '.explore_Div1h2',
                start: "top 90%",
                end: "bottom 60%",
                scrub: true,
            }
        })


        gsap.to('.auto_awesome', {
            opacity: 1,
            duration: 1,
            ease: 'easeIn',
            x: 200,
            rotation: 360,
            scrollTrigger: {
                trigger: '.auto_awesome',
                start: "top 90%",
                end: "bottom 60%",
                scrub: true,
            }
        })


        gsap.to('.fifthDivPara', {
            opacity: 1,
            duration: 1,
            x: -60,
            y: -60,
            duration: 1,
            ease: 'easeIn',
            scrollTrigger: {
                trigger: '.fifthDivPara',
                start: "top 90%",
                end: "bottom 60%",
                scrub: true,
            }
        })



        gsap.to('.fifthDivh2', {
            opacity: 1,
            duration: 1,
            y: -60,
            duration: 1,
            ease: 'easeIn',
            scrollTrigger: {
                trigger: '.fifthDivh2',
                start: "top 100%",
                end: "bottom 70%",
                scrub: true,
            }
        })

        gsap.to('.sentiment', {
            opacity: 1,
            duration: 1,
            ease: 'easeIn',
            x: 200,
            rotation: 360,
            scrollTrigger: {
                trigger: '.sentiment',
                start: "top 90%",
                end: "bottom 60%",
                scrub: true,
            }
        })



        gsap.to('.sixthDiv1ah2', {
            opacity: 1,
            duration: 1,
            ease: 'easeOut',
            x: 200,
            scrollTrigger: {
                trigger: '.sixthDiv1ah2',
                start: "top 85%",
                end: "bottom 55%",
                scrub: true,
            }
        })

        gsap.to('.midSec', {
            opacity: 1,
            duration: 1,
            ease: 'easeOut',
            y: -100,
            x: -70,
            scrollTrigger: {
                trigger: '.midSec',
                start: "top 85%",
                end: "bottom 65%",
                scrub: true,
            }
        })

        gsap.to('.midSecPara', {
            opacity: 1,
            duration: 1,
            ease: 'easeOut',
            y: "50%",
           
            scrollTrigger: {
                trigger: '.midSec',
                start: "top 40%",
                end: "bottom 65%",
                scrub: true,
            }
        })

        gsap.to('.midSecPara', {
            opacity: 1,
            duration: 1,
            ease: 'easeOut',
            y: "50%",
           
            scrollTrigger: {
                trigger: '.midSec',
                start: "top 40%",
                end: "bottom 65%",
                scrub: true,
            }
        })

        gsap.to('.seventhDiv1Para', {
            opacity: 1,
            duration: 1,
            ease: 'ease',
            y: -100,
           
            scrollTrigger: {
                trigger: '.seventhDiv1Para',
                start: "top 80%",
                end: "bottom 60%",
                scrub: true,
            }
        })

        gsap.to('.seventhDiv2', {
            opacity: 1,
            duration: 1,
            ease: 'ease',
            y: -100,
           
            scrollTrigger: {
                trigger: '.seventhDiv2',
                start: "top 80%",
                end: "bottom 60%",
                scrub: true,
            }
        })


    

    }, [])




    display3 =
        <div>
            {
                <div className='exploreTemplateContainer3'>
                    {
                        Object.values(Testimonials).map((job) => (

                            <div className='display3' key={job.id}>
                                <div className='display3_first'>
                                    <div className='display3_firsta'>
                                        <div className='display3_firsta_img' style={{ background: `url(${job.photo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                                        <div className='display3_firstaa'>
                                            <div><p>{job.name}</p></div>
                                            <div>
                                                <p>{job.job_position}, {job.company}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='display3_firstb'>
                                        <p>{job.testimonial}</p>
                                    </div>
                                </div>

                                <div className='display3_firstc'>
                                    <p className='display3_firstcPara'>More testimonials</p>
                                    <div>
                                        <div className='testimonial testimonial1' style={{ background: `url(${job.photo1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt="testimonial" />
                                        <div className='testimonial testimonial2' style={{ background: `url(${job.photo2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt="testimonial" />
                                        <div className='testimonial testimonial3' style={{ background: `url(${job.photo3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt="testimonial" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            }
        </div>



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
                                        <p style={{ color: job.color }} ref={available}>{job.availability}</p>
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
                                            {/* <p>{job.rating}</p>
                                            <span class="material-symbols-outlined star">
                                                star_rate
                                            </span> */}
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
    } else if (liElement == 'sale') {
        const newArray = Object.values(sale).slice(0, 8);
        display =
            <div>
                {
                    <div className='exploreTemplateContainer'>
                        {
                            newArray.map((job) => (

                                <div className='exploreTem' key={job.id}>
                                    <div className='exploreTem1'>
                                        <div className='exploreTem1a'>
                                            <img className='ImageExplore ImageExplore2' src={sell} />
                                            <p>{job.phone}</p>
                                        </div>

                                        <div className='exploreTem1b'>
                                            <p>{job.rating}</p>
                                            <span class="material-symbols-outlined star">
                                                star_rate
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className='exploreTem3'>{job.name}</h3>
                                    <p className='exploreTem4'>{job.location}</p>
                                    <div className='exploreTem5'>
                                        <p className='exploreTem5Para'>N{job.price}<span className='exploreTem5Span'>.</span></p>
                                        <p style={{ color: job.color }} ref={available}>{job.availability}</p>
                                        <span class="material-symbols-outlined plumbing">
                                            shopping_cart
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                }
            </div>
    } else if (liElement == 'forum') {
        display =
            <div>
                {
                    <div className='exploreTemplateContainer'>
                        {
                            <div className='forumDiv'>
                                <p>Join the largest online forums on craiglist.</p>
                                <img alt='forum' src={forum} />
                            </div>
                        }
                    </div>

                }
            </div>
    } else if (liElement == 'community') {
        display =
            <div>
                {
                    <div className='exploreTemplateContainer'>
                        {
                            <div className='forumDiv'>
                                <p>Join the our community.</p>
                                <img alt='community' src={comm} />
                            </div>
                        }
                    </div>

                }
            </div>
    }



    if (liElement == 'jobs') {
        const newArray = showMore ? Object.values(jobs).slice(9, Object.keys(jobs).length) : Object.values(jobs).slice(8, 12);
        display2 =
            <div>
                {
                    <div className='exploreTemplateContainer exploreTemplateContainer2'>
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
        const newArray = showMore ? Object.values(services).slice(9, Object.keys(services).length) : Object.values(services).slice(8, 12);
        display2 =
            <div>
                {
                    <div className='exploreTemplateContainer exploreTemplateContainer2'>
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
                                        <p style={{ color: job.color }} ref={available}>{job.availability}</p>
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
        const newArray = showMore ? Object.values(houses).slice(9, Object.keys(houses).length) : Object.values(houses).slice(8, 12);
        display2 =
            <div>
                {
                    <div className='exploreTemplateContainer exploreTemplateContainer2'>
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
                                            {/* <p>{job.rating}</p>
                                            <span class="material-symbols-outlined star">
                                                star_rate
                                            </span> */}
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
    } else if (liElement == 'sale') {
        const newArray = showMore ? Object.values(sale).slice(9, Object.keys(sale).length) : Object.values(sale).slice(8, 12);
        display2 =
            <div>
                {
                    <div className='exploreTemplateContainer exploreTemplateContainer2'>
                        {
                            newArray.map((job) => (

                                <div className='exploreTem' key={job.id}>
                                    <div className='exploreTem1'>
                                        <div className='exploreTem1a'>
                                            <img className='ImageExplore ImageExplore2' src={sell} />
                                            <p>{job.phone}</p>
                                        </div>

                                        <div className='exploreTem1b'>
                                            <p>{job.rating}</p>
                                            <span class="material-symbols-outlined star">
                                                star_rate
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className='exploreTem3'>{job.name}</h3>
                                    <p className='exploreTem4'>{job.location}</p>
                                    <div className='exploreTem5'>
                                        <p className='exploreTem5Para'>N{job.price}<span className='exploreTem5Span'>.</span></p>
                                        <p style={{ color: job.color }} ref={available}>{job.availability}</p>
                                        <span class="material-symbols-outlined plumbing">
                                            shopping_cart
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                }
            </div>
    } else if (liElement == 'forum') {
        display =
            <div>
                {
                    <div className='exploreTemplateContainer exploreTemplateContainer2'>
                        {
                            <div className='forumDiv'>
                                <p>Join the largest online forums on craiglist.</p>
                                <img alt='forum' src={forum} />
                            </div>
                        }
                    </div>

                }
            </div>
    } else if (liElement == 'community') {
        display =
            <div>
                {
                    <div className='exploreTemplateContainer exploreTemplateContainer2'>
                        {
                            <div className='forumDiv'>
                                <p>Join the our community.</p>
                                <img className='comm' alt='community' src={comm} />
                            </div>
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
                        <p className='firstDivPara'>Craiglist, the perfect <span>user-centric </span>platfrom.</p>
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
                    <World />
                </div>
            </div>

            <div className='explore_Div'>
                <div className='explore_Div1'>
                    <span className="material-symbols-outlined auto_awesome">
                        auto_awesome
                    </span>
                    <h2 className='explore_Div1h2'>Explore our offerings</h2>
                    <p className='explore_Div1Para'>
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
                                    <option value="community">Community</option>
                                    <option value="forum">Forum</option>
                                </select>
                            </div>
                            :
                            <div><ul ref={ulRef}>
                                <li ref={li_jobs} name='jobs' onClick={changeHighlight}>Jobs</li>
                                <li name='houses' onClick={changeHighlight}>Houses</li>
                                <li name='services' onClick={changeHighlight}>Services</li>
                                <li name='sale' onClick={changeHighlight}>For sale</li>
                                <li name='community' onClick={changeHighlight}>Community</li>
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

                <div className='explore_Div5'>
                    <p>{liElement} posted within the past 7 days</p>
                </div>

                <div className='explore_Div6'>
                    {
                        display2
                    }
                    <div className='explore_Div6Div'>
                        <p onClick={toggleShowMore}>{showMore ? "See Less" : "See More"}
                            <span class="material-symbols-outlined">
                                {showMore ? "expand_less" : "expand_more"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='fifthDiv'>
                <div>
                    <span class="material-symbols-outlined sentiment">
                        sentiment_satisfied
                    </span>
                </div>

                <div>
                    <h2 className='fifthDivh2'>Testimonials</h2>
                    <p className='fifthDivPara'>
                        Over the years we have heped 200million+ users to achieve
                        their goal. This is what our users think about us.
                    </p>
                </div>

                <div>
                    {
                        display3
                    }
                </div>
            </div>

            <div className='sixthDiv'>
                <div className='sixthDiv1'>
                    <div className='sixthDiv1a'>
                        <h2 className='sixthDiv1ah2'>
                            Perform more functions with craiglist app.
                        </h2>
                    </div>

                    <div className='sixthDiv1b'>
                        <div className='sixthDiv1ba'>
                            <div className='sixthDiv1baPhoto'><img src={google} /></div>
                            <div>
                                <p>Get it on</p>
                                <p>Google play</p>
                            </div>
                        </div>

                        <div className='sixthDiv1bb'>
                            <img src={apple} className='sixthDiv1bbPhoto' />
                            <div>
                                <p>Download on</p>
                                <p>App store</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='midSec'>
                    <p className='midSecPara'>Craiglist</p>
                </div>

                <div className='circle circle1'></div>
                <div className='circle circle2'></div>
                <div className='circle circle3'></div>
                <div className='circle circle4'></div>
            </div>

            <div className='seventhDiv'>
                <div className='seventhDiv1'>
                    <p className='seventhDiv1Para'>Start your journey with craiglist</p>
                </div>

                <div className='seventhDiv2'>
                    <span className='seventhDiv1Span'>
                        We leave you with a smile everytime you visit our platfrom.
                        Be part of the craiglist family. We are always at your service.
                    </span>
                </div>

                <div className='thirdDiv seventhDiv3'>
                    <div>
                        <p>Create posting</p>
                        <span class="material-symbols-outlined">
                            north_east
                        </span>
                    </div>
                    <div><p>Register</p></div>
                </div>

                <div className='view view1'></div>
                <div className='view view2'></div>
                <div className='view view3'></div>
                <div className='view view4'></div>

            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}