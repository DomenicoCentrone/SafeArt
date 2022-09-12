import React from 'react';
import Reveal from 'react-awesome-reveal';


function AboutsUs() {
  return (
        <div className='container'>
            <Reveal className='onStep d-inline' delay={300} duration={1200} triggerOnce>
            <div className='row'>
                <div className='col-md-6'>
                    <h1>
                        SafeArt Protocol
                    </h1>
                    <p className='leads col-white'>Our mission is to build a solid ecosystem that allows interaction between all those who are part of the Art sector, thanks to an innovative and totally decentralized economic system.
                    This is because we believe that the blockchain world is the next step in the innovation of the Art ecosystem, a sector that has been evolving for almost thousand and thousand years.
                    To do this, we have developed a "protocol" capable of involving all those interested in the sector in a unique and innovative way, all without distorting tradition and culture, fundamental parts of this field.
                    If like us you feel ready to create a turning point in the world of Art, do not lose sight of us and come back here for constant updates.
                    </p>
                    <a href="https://discord.gg/SqbrG9KTqd" target="_blank"><i className="fa-brands fa-discord white-aicon"></i></a>
                    <a href="https://drive.google.com/file/d/1bEoPkQNmHUkMgox63Dk2xYStp9EkIP2O/view?usp=sharing" target="_blank" className="btn-main inline lead">Whitepaper</a>
                    <a href="https://twitter.com/SafeArt_io" target="_blank"><i className="fa fa-twitter white-aicon"></i></a>
                </div>
                <div className='col-md-6'>
                    <img src=".\img\newitem\browser_icons_1.png" className="img-fluid center-img" alt="safeart"></img>
                </div>
            </div>
                </Reveal>
        </div> 
  )
}

export default AboutsUs