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
`

function Team() {
  return (
    <div className='container' id="team">
        <Reveal delay={800} duration={900} keyframes={fadeInUp} triggerOnce>
        <div className='row justify-content-center text-center'>
            
            <div className='col-md-4'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src=".\img\Team\bomberbax.jpg" className='img-fluid'></img>
                    </div>
                    <div className='col-md-6'>
                        <h3>Bomberbax</h3>
                        <p>Founder</p>
                    </div>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src=".\img\Team\roos.jpg" className='img-fluid'></img>
                    </div>
                    <div className='col-md-6'>
                        <h3>Domenico</h3>
                        <p>Blockchain Dev</p>
                    </div>
                </div>
            </div>  

            <div className='col-md-4'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src=".\img\Team\ettore.jpg" className='img-fluid'></img>
                    </div>
                    <div className='col-md-6'>
                        <h3>Ettore</h3>
                        <p>Dev</p>
                    </div>
                </div>
            </div>   

            <div className='col-md-4 mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src=".\img\Team\edef.jpg" className='img-fluid'></img>
                    </div>
                    <div className='col-md-6'>
                        <h3>Edef</h3>
                        <p>Developer</p>
                    </div>
                </div>
            </div>
        </div>
        </Reveal>
    </div>
  )
}

export default Team