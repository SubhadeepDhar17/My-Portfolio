import React from 'react';
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

const ScrollAnimation = () => {
    const [scrollAnime, setScrollAnime] = useState();
    useEffect(() =>  {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if(entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });
        const hiddenElements = document.querySelectorAll('.hidden')
        hiddenElements.forEach((el) => observer.observe(el))
    }, [])
}

const Hero = () => {
    const scrollAnime = ScrollAnimation();
    return (
        <>
            <div className='hero hidden'>
                <h1>I AM SUBHA. A FRONT END DEVELOPER
                    & FREELANCER.
                </h1>
            </div>
        </>
    )
}

const Projects = () => {
    return (
        <>
            <div className="layout projects">
                <h1>Projects</h1>
                <hr />
                <ul className='flexUL'>
                    <li>
                        <h2>Example 01</h2>
                        <Link to="/work">
                            <img src={Coding1} alt=''/>
                        </Link>
                    </li>
                    <li>
                        <h2>Example 02</h2>
                        <Link to="/work">
                            <img src={Art} alt=''/>
                        </Link>
                    </li>
                    <li>
                        <h2>Example 03</h2>
                        <Link to="/work">
                            <img src={Coding2} alt=''/>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

const Marketing = () => {
    return (
        <>
            <div className='layout marketing'>
                <h1>Marketing</h1>
                <hr />
                <ul className='flexUL'>
                    <li>
                        <h2>Join my YouTube channel where I show my design thinking, 
                            my process, and my personality. The channel has helped 
                            over 200K designers become more proficient in the tools 
                            I use everyday, Figma, Webflow & more. Join the journey!

                            <br /><br />
                            <br /><br />
                            <Link to="/contact">Contact me for more</Link>&nbsp;⤵︎
                        </h2>
                    </li>
                    <li>
                        <img src={Coding2} alt='' />
                    </li>
                </ul>
            </div>
        </>
    )
}

const Products = () => {

    const [open, setOpen] = React.useState(false);
    const [close, setClose] = React.useState(true);
    const [down, setDown] = React.useState(true);
    const [up, setUp] = React.useState(false);
    return (
        <>
            <div className='layout aboutMe'>
                <h1>About Me</h1>
                <hr />
                <ul className='flexUL'>
                    <li>
                        <h2>I'm a product designer working on various projects on a 
                            wide range of clients. My skillset lies on creating branding 
                            packages & websites to deliver the full online experience 
                            for new and also veteran businesses. You can often find
                            me creating videos about design over on YouTube, or 
                            sharing my thoughts on my podcast, Dialogue With Designers. 
                            I'm passionate about giving back and teaching what I know 
                            to the next generation of designers.
                        </h2>
                    </li>
                    <li>
                        <div className='products'>
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

                                            <h2>② Branding/Logo</h2>

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
                    </li>
                </ul>
            </div>
        </>
    )
}

const MarqueeList = () => {
    return (
        <>
            <div className='marquee'>
                <div className='texts'>
                    <Marquee speed={60}>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>JavaScript</span>
                        <span>React JS</span>
                        <span>Node JS</span>
                        <span>MySQL</span>
                    </Marquee>
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
        <div className='layout testimonials'>
                <h1>Marketing</h1>
                <hr />
            <div className='testi'>
                <div onClick={prevPerson}>
                    <img className='arrow' src={leftArrow} alt=''/>
                </div>
                <div>
                    <p className='text'>{text}</p>
                    <p><i>{name}<br />{job}</i></p>
                </div>
                <div  onClick={nextPerson}>
                    <img className='arrow' src={rightArrow} alt=''/>
                </div>
            </div>
        </div>
    )
}

const ContactMe = () => {
    return (
        <>
        <div className='layout contactMe'>
                <h1>Marketing</h1>
                <hr />
                <ul className='flexUL'>
                    <li>
                        <h2>Looking to start a new project or just want to say hi? 
                            Send me an email and I’ll do my best to reply within 
                            24 hrs!
                            <br />
                            <br />
                            <br />
                            If contact forms aren’t your thing... 
                            send me an email at hello@arnau.design
                        </h2>
                    </li>
                    <li>
                        
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' />
                                </li>
                                <li>
                                    <textarea placeholder='&nbsp; &nbsp; Message' name='message' required/>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="Send" />
                                </li>
                            </ul>
                        </form>
                    </li>
                </ul>
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
            <Marketing />
            <Products />
            <MarqueeList />
            <Testimonials />
            <ContactMe />
            <NewsLetter />
        </>
    )
};

export default Home;