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

function Services() {
  return (
    <div className='container mt-5'>
        <Reveal delay={800} duration={900} keyframes={fadeInUp} triggerOnce>
        <div className='row text-center'>
            <div className='col-md-6'>
                <h2>SafeArt Reviews</h2>
                <img src=".\img\newitem\stars.png"></img>
                <p>We as safeart, want to launch a review platform, that you can review initially only for crypto/NFT projects, but in the future also for restaurants, hotels, and businesses.</p>
                <p>We want to build an immutable and reliable blockchain platform where people can interact to review their own crypto projects or another projects, in order to guide people to become better in this field.</p>
                <p>Our goal is to assist everyone, even those who are less knowledgeable about this crypto/NFT projects in developing a clear understanding of projects and help them to grow.</p>
            </div>
            <div className='col-md-6'>
                <h2>SafeArt Certification</h2>
                <img src="./img/newitem/mobile_illustration_1.png"></img>
                <p>In our company we boast experienced artwork analyzers, as safeart we are committed to issuing a reliability service for the client to ensure that the art pieces they own are certified through a serious company that has experience in the physical/virtual art world for many years.</p>
                <p>Our official SafeArt certification will be issued in the form of NFTs and can be found from phone/computer.</p>
            </div>
            <div className="col-md-12 text-center">
            <a href="https://discord.gg/SqbrG9KTqd" target="_blank"><i className="fa-brands fa-discord white-aicon"></i></a>
              <a href="https://drive.google.com/file/d/1bEoPkQNmHUkMgox63Dk2xYStp9EkIP2O/view?usp=sharing" target="_blank" className="btn-main inline lead">Whitepaper</a>
            <a href="https://twitter.com/SafeArt_io" target="_blank"><i className="fa fa-twitter white-aicon"></i></a>
            </div>
        </div>
            </Reveal>
    </div>
  )
}

export default Services