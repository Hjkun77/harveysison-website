import React from 'react';
import resume from 'resources/files/Sison, Harvey Jay_Resume.pdf'
import harvey from 'resources/images/harvey.svg';
import facebook from 'resources/icons/facebook.svg';
import github from 'resources/icons/github.svg';
import instagram from 'resources/icons/instagram.svg';
import linkedin from 'resources/icons/linkedin.svg';
import email from 'resources/icons/email.svg';
import './styles.scss';

const Home = () => {
    return (
        <div>
            <section id="landing">
                <div className="landing-container d-flex justify-content-between align-items-center">
                    <img src={harvey} alt="harvey-sison" />
                    <div>
                        <h1>Hi! I’m <strong>Harvey</strong>, <br /> a Full Stack Software Engineer, Technopreneur and a UX Enthusiast from Manila, Philippines</h1>
                        <h2><strong>A NEW AMAZING WEBSITE IS COMING SOON</strong> <span role="img">👀</span></h2>
                        <a href={resume} target="_blank" rel="noopener noreferrer"><button>Download Resume</button></a>
                    </div>
                </div>
                <div className="icon-container d-flex justify-content-between">
                    <a href="https://www.facebook.com/harveymile" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></a>
                    <a href="mailto:harveyjaysison@gmail.com"><img src={email} alt="email" /></a>
                    <a href="https://www.instagram.com/hjkun77/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /></a>
                    <a href="https://linkedin.com/in/harvey-jay-sison-0815b5159/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" /></a>
                    <a href="https://github.com/Hjkun77" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>
                </div>
                <p className="text-center">All Rights Reserved 2019 © Harvey Sison</p>
            </section>
        </div>
    );
};

export default Home;