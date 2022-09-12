import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;

const slidermainparticle= () => (
 <div className="container">
    <div className="row align-items-center">
          <div className="col-md-6">
              <div className="spacer-single"></div>
              <h6> <span className="text-uppercase color">safeart protocol</span></h6>
              <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
              <h1 className="col-white">Welcome to SafeArt.<br></br>The new art era.</h1>
              </Reveal>
              <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={900} triggerOnce>
              <p className="lead col-white">
              SafeArt Protocol is the first technology that aims to create an interaction between blockchain and the Art world.
              </p>
              </Reveal>
              <div className="spacer-10"></div>
              <Reveal className='onStep d-inline' keyframes={inline} delay={800} duration={900} triggerOnce>
              <a href="https://discord.gg/SqbrG9KTqd" target="_blank"><i className="fa-brands fa-discord white-aicon"></i></a>
              <a href="https://drive.google.com/file/d/1bEoPkQNmHUkMgox63Dk2xYStp9EkIP2O/view?usp=sharing" target="_blank" className="btn-main inline lead">Whitepaper</a>
              <a href="https://twitter.com/SafeArt_io" target="_blank"><i className="fa fa-twitter white-aicon"></i></a>
              <div className="mb-sm-30"></div>
              </Reveal>
          </div>
          <div className="col-md-6 xs-hide">
          <Reveal className='onStep d-inline' keyframes={inline} delay={300} duration={1200} triggerOnce>
              <img src=".\img\nft\home_michelangelo.png" className="img-fluid" alt=""/>
          </Reveal>
          </div>
      </div>
    </div>
);
export default slidermainparticle;