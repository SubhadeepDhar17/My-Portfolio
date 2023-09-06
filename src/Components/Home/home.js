import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import './home.scss';
import Coding1 from '../../Assets/Images/coding1.jpg';
import Coding2 from '../../Assets/Images/coding2.jpg';
import Art from '../../Assets/Images/artshirt.jpg';
import downArrow from '../../Assets/Images/Down.svg'
import upArrow from '../../Assets/Images/Up.svg';
import leftArrow from '../../Assets/Images/left.svg';
import rightArrow from '../../Assets/Images/right.svg';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import {useInView} from 'react-intersection-observer';
import SMHB from '../../Assets/Images/SMHB.png'
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
                    I live somewhere where design meets coding. I love creating
                    my own desig and prototype in Figma and implement them
                    using HTML, SCSS and TS on React.js.
                    To know more click <Link to="/">About me</Link>
                </p>
            </div>
        </>
    )
}

const Projects = () => {
    const {ref: myRef, inView: scrollAnime} = useInView();

    return (
        <>
            <div className="projects">
                <hr />
                <h1>Projects</h1>
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
    )
}

const Products = () => {

    const [open, setOpen] = React.useState(false);
    const [close, setClose] = React.useState(true);
    const [down, setDown] = React.useState(true);
    const [up, setUp] = React.useState(false);
    return (
        <>
            <div className='services'>
                <hr />
                <h1>About Me</h1>
                <hr />
                <div className='flexServices'>
                    <h2>I'm a product designer working on various projects on a
                        wide range of clients. My skillset lies on creating branding
                        packages & websites to deliver the full online experience
                        for new and also veteran businesses. You can often find
                        me creating videos about design over on YouTube, or
                        sharing my thoughts on my podcast, Dialogue With Designers.
                        I'm passionate about giving back and teaching what I know
                        to the next generation of designers.
                    </h2>
                    <div className='dropdown'>
                        <h2>Your one step shop for:</h2>
                        <ul>
                            <li>
                                <div className="menuTrigger" onClick={() => {
                                    setClose(!close)
                                    setDown(!down)}}>
                                    <h2>① Branding/Logo</h2>
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Mi sed pulvinar rutrum tempor. Etiam duis massa elementum, 
                                        etiam cras tristique. Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit. Mi sed pulvinar rutrum tempor. Etiam duis 
                                        massa elem Starting at € 2,450
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="menuTrigger" onClick={() => {
                                    setOpen(!open)
                                    setUp(!up)}}>

                                        <h2 className='dropdownHeading'>② Branding/Logo</h2>

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

const MarqueeList = () => {
    return (
        <>
            <div className='marquee'>
                <div>
                    <span> HTML</span>
                    <span> CSS</span>
                    <span> JS</span>
                    <span> SASS</span>
                    <span> REACTJS</span>
                    <span> TS</span>
                    <span> NODEJS</span>
                    <span> EXPRESS</span>
                </div>
            </div>
        </>
    )
}

const Testimonials = () => {

    const reviews = [
        {
          id: 1,
          name: 'susan smith',
          job: 'web developer',
          text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
          id: 2,
          name: 'anna johnson',
          job: 'web designer',
          text:
            'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        },
        {
          id: 3,
          name: 'peter jones',
          job: 'intern',
          text:
            'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        },
        {
          id: 4,
          name: 'bill anderson',
          job: 'the boss',
          text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
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
            <h1>Testimonials</h1>
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
        <div className='contactMe'>
            <hr />
            <h1>Contact Me</h1>
            <hr />
            <div className='contactCard'>
                <p>This is a paragraph</p>
                <ul>
                    <form>
                        <li><input type='text' placeholder='Name' required/></li>
                        <li><input type='email' placeholder='Email' required/></li>
                        <li><input type='text' placeholder='Subject' required/></li>
                        <li><textarea placeholder='Message'/></li>
                        <button>Submit</button>
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

/*<ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li className='full'>
                                <input type='text' name='subject' placeholder='Subject' />
                            </li>
                            <li className='full'>
                                <textarea placeholder='&nbsp; &nbsp; Message' name='message' required/>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value="Send" />
                            </li>
                        </ul>*/