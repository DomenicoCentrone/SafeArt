import React from 'react';
import emailjs from 'emailjs-com';
import { createGlobalStyle } from 'styled-components';
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
`

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
  }
`;

const contact= function() {

  function sendEmail(e) {

    const success = document.getElementById("success");
    const button = document.getElementById("buttonsent");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_csfdEZiA', e.target, 'user_zu7p2b3lDibMCDutH5hif')
      .then((result) => {
          console.log(result.text);
          success.classList.add('show');
          button.classList.add('show');
          failed.classList.remove('show');
      }, (error) => {
          console.log(error.text);
          failed.classList.add('show');
      });
  }

  return (
    <div>
      <Reveal delay={800} duration={900} keyframes={fadeInUp} triggerOnce>
      {/* <GlobalStyles /> */}
      <section className='container' id="contactus">
        <div className='row justify-content-center'>
          <div className='col-md-12 mb-3'>
            <h4 className='text-center'>CONTACT US</h4>
            <h1 className='text-center'>Get in touch</h1>
            <h2 className='text-center'>administration@safeart.io</h2>
          </div>
          <div className="col-md-12 text-center">
          <a href="https://discord.gg/SqbrG9KTqd" target="_blank"><i className="fa-brands fa-discord white-aicon"></i></a>
              <a href="https://drive.google.com/file/d/1bEoPkQNmHUkMgox63Dk2xYStp9EkIP2O/view?usp=sharing" target="_blank" className="btn-main inline lead">Whitepaper</a>
              <a href="https://twitter.com/SafeArt_io" target="_blank"><i className="fa fa-twitter white-aicon"></i></a>
          </div>
        </div>
      </section>
      </Reveal>
    </div>
  );
}
export default contact;