import React from 'react';
import SliderMainParticle from '../components/SliderMainParticle';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import AboutsUs from '../components/AboutsUs';
import Reveal from 'react-awesome-reveal';
import Roadmap from '../components/Roadmap';
import { keyframes } from "@emotion/react";
import Services from '../components/Services';
import Team from '../components/Team';
import Faq from '../components/FAQ';
import Contact from '../pages/contact';

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
const GlobalStyles = createGlobalStyle`
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  .navbar .mainside a{
    background: #C29F3C;
    &:hover{
      box-shadow: 2px 2px 20px 0px #C29F3C;
    }
  }
  .item-dropdown{
    .dropdown{
      a{
        &:hover{
          background: #C29F3C;
        }
      }
    }
  }
  .btn-main{
    background: #C29F3C;
    &:hover{
      box-shadow: 2px 2px 20px 0px #C29F3C;
    }
  }
  p.lead{
    color: #a2a2a2;
  }
  .navbar .navbar-item .lines{
    border-bottom: 2px solid #C29F3C;
  }
  .jumbotron.no-bg{
    height: 100vh;
    overflow: hidden;
    background-repeat: repeat;
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
  }
  #tsparticles{
    top: 0;
  }
  .text-uppercase.color{
    color: #C29F3C;
  }
  .de_count h3 {
    font-size: 36px;
    margin-bottom: 0px;
  }
  .de_count h5{
    font-size: 14px;
    font-weight: 500;
  }
  h2 {
    font-size: 30px;
  }
  .box-url{
    text-align: center;
    h4{
      font-size: 16px;
    }
  }
  .de_countdown{
    border: solid 2px #C29F3C;
  }
  .author_list_pp, .author_list_pp i, 
  .nft_coll_pp i, .feature-box.style-3 i, 
  footer.footer-light #form_subscribe #btn-subscribe i, 
  #scroll-to-top div{
    background: #C29F3C;
  }
  footer.footer-light .subfooter .social-icons span i{
    background: #403f83;
  }
  .author_list_pp:hover img{
    box-shadow: 0px 0px 0px 2px #C29F3C;
  }
  .nft__item_action span{
    color: #C29F3C;
  }
  .feature-box.style-3 i.wm{
    color: rgba(131,100,226, .1);
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;


const homeone= () => (
  <div>
  <GlobalStyles />
      <section className="jumbotron no-bg" style={{backgroundImage: `url(${'./img/background/backfuture.png'})`}}>
       {/* <Particle/> */}
         <SliderMainParticle />
      </section>

      <section className='container no-top no-bottom' id="aboutus" style={{backgroundImage: `url(${'./img/background/about.png'})`}}>
        <AboutsUs/>
      </section>

      <Reveal delay={800} duration={900} keyframes={fadeInUp} triggerOnce>
      <section className='container no-bottom' id="icon">
        <div className="row justify-content-center">
            <div className="col-lg-2 col-sm-4 col-6 mb30">
                <span className="box-url">
                    <img src=".\img\newitem\icons\miscellaneous_icon_9.png" alt="" className="mb20"/>
                    <h4>dApp Develop</h4>
                </span>
            </div>

            <div className="col-lg-2 col-sm-4 col-6 mb30">
                <span className="box-url">
                    <img src="./img/newitem/icons/crypto_currency_icons_1.png" alt="" className="mb20"/>
                    <h4>NFTs</h4>
                </span>
            </div>
            
            <div className="col-lg-2 col-sm-4 col-6 mb30">
            </div>       

            <div className="col-lg-2 col-sm-4 col-6 mb30">
                <span className="box-url">
                    <img src=".\img\newitem\miscellaneous_icons_4.png" alt="" className="mb20"/>
                    <h4>Reviews</h4>
                </span>
            </div>    

            <div className="col-lg-2 col-sm-4 col-6 mb30">
                <span className="box-url">
                    <img src="./img/newitem/icons/random_icons_20.png" alt="" className="mb20"/>
                    <h4>Certification</h4>
                </span>
            </div>

        </div>
      </section>
      </Reveal>

      <section className='container no-bottom separe' id="separe" style={{
        backgroundImage: `url(${'./img/background/separe.png'})`}}>
      </section>

      <section className='container no-top no-bottom' id="services" style={{backgroundImage: `url(${'./img/background/about.png'})`}}>
        <Services/>
      </section>

      <section className='container no-top no-bottom' id="roadmap" style={{backgroundImage: `url(${'./img/background/roadmap.png'})`}}>
        <div className='row'>
          <div className="spacer-double"></div>
          <div className='col-lg-12'>
            <Roadmap/>
          </div>
        </div>
      </section>

      <section className='container no-top no-bottom' id="team">
        <Team/>
      </section>

      <section className='container no-top no-bottom' id="faq" style={{backgroundImage: `url(${'./img/background/about.png'})`}}>
        <Faq/>
      </section>

      <section className='container no-top no-bottom' id="contact">
        <Contact/>
      </section>

    <Footer />

  </div>
);
export default homeone;