import React from 'react'
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


function Roadmap() {
  return (
    <div class="container road">
        <Reveal delay={800} duration={900} keyframes={fadeInUp} triggerOnce>
        <div class="wrapper text">
            <h1 class="text-center" >Roadmap</h1>
            <ul class="sessions">
            <li>
                <div class="time"><p>Completed</p></div>
                <p>Website platform launch</p>
            </li>
            <li>
                <div class="time"><p>Completed</p></div>
                <p>Launch community platform: discord, twitter</p>
            </li>
            <li>
                <div class="time"><p>Step3</p></div>
                <p>Launch SafeArt gallery</p>
            </li>
            <li>
                <div class="time"><p>Step 4</p></div>
                <p>First NFTs drop. FREE MINT</p>
            </li>
            <li>
                <div class="time"><p>Step 5</p></div>
                <p>Create new collaboration</p>
            </li>
            <li>
                <div class="time"><p>Step 6</p></div>
                <p>Safeart certification launch </p>
            </li>
            <li>
                <div class="time"><p>Step 7</p></div>
                <p>Launch crypto or NFT project review platform, searchable anywhere, immutable</p>
            </li>
            </ul>
        </div>
        </Reveal>
    </div> 
  )
}

export default Roadmap;