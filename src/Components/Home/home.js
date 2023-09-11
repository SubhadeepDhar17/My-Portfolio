import React from 'react';
import './home.scss';
import downArrow from '../../Assets/Images/Down.svg'
import upArrow from '../../Assets/Images/Up.svg';
import { Link } from 'react-router-dom';
import {useInView} from 'react-intersection-observer';
import SMHB from '../../Assets/Images/SMHB.png'
import Netflix from '../../Assets/Images/NetflixClone.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';


const Hero = () => {
    const {ref: myRef, inView: scrollAnime} = useInView();

    return (
        <>
            <div className="hero">
                <h1 ref={myRef} className={`${scrollAnime ? 'show' : 'hidden'}`}>
                    I AM SUBHA&nbsp;. A FRONT END DEVELOPER
                    & UI/UX DESIGNER.
                </h1>
            </div>
            <div className="about">
                <p className={`${scrollAnime ? 'paraShow' : 'paraHidden'}`}>
                    I live  where design meets coding. I love creating
                    my own desing and prototype in Figma and implement them
                    using HTML, SCSS, Tailwind and JS on React.js. User experince
                    and proper aesthetics are my top priority.
                    To know more click <a href='#about'>About me</a>
                </p>
            </div>
        </>
    )
}

const Projects = () => {
    const {ref: myRef, inView: scrollAnime} = useInView();

    return (
        <>
            <div className="projects" id='projects'>
                <hr />
                <h1 className='title'>Projects</h1>
                <hr />
                <div ref={myRef} className="projectCard">
                    <div className={`${scrollAnime ? 'show' : 'hidden'}`}>
                        <Link to="https://polygonscan.com/address/0x41da8c409c94bbbbf4384024f5a89b7a72c42442"
                        target='_blank'>
                            <img src={SMHB} alt='' />
                        </Link>
                    </div>
                    <div className={`${scrollAnime ? 'paraShow' : 'paraHidden'}`}>
                        <h1>NFT STARTUP</h1>
                        <p>Started a Polygon Based ERC 721 Token.
                            Coded in Solidity and launched in Polygon blockchain
                            with token ID SMHB.
                            Made a dapp with React.js coded in Js and styles with CSS
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

const ProjectTwo = () => {
    const {ref: myRef, inView: scrollAnime} = useInView();

    return (
        <div className="projects">
        <div ref={myRef} className="projectCard">
            <div className={`${scrollAnime ? 'show' : 'hidden'}`}>
                <Link to="https://netflixclonesubha.netlify.app"
                target='_blank'>
                    <img src={Netflix} alt='' />
                </Link>
            </div>
            <div className={`${scrollAnime ? 'paraShow' : 'paraHidden'}`}>
                <h1>NETFLIX Clone</h1>
                <p>Designed a full stack Netflix clone website. Users can login, bookmark movies.
                    Build using React.js, Fireship and Tailwind CSS.
                </p>
            </div>
        </div>
        </div>
    )
}

const Products = () => {

    const [open, setOpen] = React.useState(false);
    const [close, setClose] = React.useState(true);
    const [down, setDown] = React.useState(true);
    const [up, setUp] = React.useState(false);
    return (
        <>
            <div className='services' id='about'>
                <hr />
                <h1 className='title'>About Me</h1>
                <hr />
                <div className='flexServices'>
                    <h2>I am a Fronted Developer and hobby UI/UX designer. I have 
                        previous work experince in Wordpress development, Search Engine
                        Optimization and Web3.0 Smart Contract. My first dive in entrepreneurial
                        skill was launching my wordpress blog balconyvine. I have achieved 470K
                        impressions on that blog within a year and an average position of 5.7.
                        I also have experience in dropshipping and e-commerce sales. In frontend 
                        I am fluent in React.js, Tailwind CSS, SASS/SCSS, CSS3, JS and TS. I am
                        currently learning Node.js to expand my knowledge and understanding of Web Dev.
                    </h2>
                    <div className='dropdown'>
                        <h2>Your one step shop for:</h2>
                        <ul>
                            <li>
                                <div className="menuTrigger" onClick={() => {
                                    setClose(!close)
                                    setDown(!down)}}>
                                    <h2>① Web development</h2>
                                    <div>
                                        {down ?
                                            (<img className='upArrow' src={upArrow} alt='' />) :
                                            (<img className='downArrow' src={downArrow} alt='' />)
                                        }
                                    </div>
                                </div>
                                <hr />
                                <div className={`dropdownMenu ${close ? 'active' : 'inactive'}`}>
                                    <p>
                                        I have extensive and work-applied knowledge of React.js.
                                        You can checkout my Github for my projects designed using React, 
                                        TS, JS and styled with Tailwind CSS, SASS/SCSS and even CSS3.
                                        I am highly moved my aesthetics and proper UX, all my sites are
                                        SEO optimised for the best results. 
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="menuTrigger" onClick={() => {
                                    setOpen(!open)
                                    setUp(!up)}}>

                                        <h2 className='dropdownHeading'>② Marketing</h2>

                                        <div>
                                            {up ?
                                                (<img className='upArrow' src={upArrow} alt='' />) :
                                                (<img className='downArrow' src={downArrow} alt='' />)
                                            }
                                        </div>
                                </div>
                                <hr />
                                <div className={`dropdownMenu ${open ? 'active' : 'inactive'}`}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Mi sed pulvinar rutrum tempor. Etiam duis massa elementum,
                                        etiam cras tristique. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Mi sed pulvinar rutrum tempor. Etiam duis
                                        massa elem Starting at € 2,450
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

const Testimonials = () => {

    const reviews = [
        {
          id: 1,
          name: 'Samantak Saha',
          job: 'Owner - Solaris',
          text: "He is a very sincere and hardworking person who delivered according to his promise and got us good results from collaboration with...",
        },
        {
          id: 2,
          name: 'Pytha',
          job: 'Owner - SushiPals',
          text:
            'Subha is very hardworking and independent thinker. He knows what works best in his field of work and that iss what seperates him from the rest.',
        },
        {
          id: 3,
          name: 'Tabita Lori',
          job: 'Owner - ART Speaks',
          text:
            'He is an amazing person to work with. He helped us build our brand from scartch till successful launch.',
        },
      ];
      

    const [index, setIndex] = React.useState(0);
    const {name, job, text} = reviews[index];

    const checkNumber = (number) => {
        if(number > reviews.length - 1){
          return 0;
        }
        else if(number < 0){
          return reviews.length - 1;
        }
        return number;
      }
    
      const nextPerson = () => {
        setIndex((index) => {
          let newIndex = index + 1;
          return checkNumber(newIndex);
        }) 
      };
    
      const prevPerson = () => {
        setIndex((index) => {
          let newIndex = index - 1;
          return checkNumber(newIndex);
        }) 
      }
    
    return (
        <div className='testimonials'>
            <hr />
            <h1 className='title'>Testimonials</h1>
            <hr />
            <div className='paragraph'>
                <div onClick={prevPerson} className='arrow'>
                    <FontAwesomeIcon icon={faArrowCircleLeft} />
                </div>
                <div>
                    <p className='text'>{text}</p>
                    <p><i>{name}<br />{job}</i></p>
                </div>
                <div  onClick={nextPerson} className='arrow'>
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                </div>
            </div>
        </div>
    )
}

const ContactMe = () => {
    return (
        <>
        <div className='contactMe' id='contact'>
            <hr />
            <h1 className='title'>Contact Me</h1>
            <hr />
            <div className='contactCard'>
                <p>
                    If you are looking for collaboration, web development or 
                    just want to say Hi, please send a message through the contact
                    form. 
                </p>
                <ul>
                    <form>
                        <li><input type='text' placeholder='Name' required/></li>
                        <li><input type='email' placeholder='Email' required/></li>
                        <li><input type='text' placeholder='Subject' required/></li>
                        <li><textarea placeholder='Message'/></li>
                        <li><input type='submit' className='button'/></li>
                    </form>
                </ul>
            </div>
        </div>
        </>
    )
}

const NewsLetter = () => {
    return (
        <>
        </>
    )
}

const Home = () => {

    return (
        <>  
            <Hero />
            <Projects />
            <ProjectTwo />
            <Products />
            <Testimonials />
            <ContactMe />
            <NewsLetter />
        </>
    )
};

export default Home;