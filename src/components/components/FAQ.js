import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { createGlobalStyle } from 'styled-components';

function FAQ() {
  return (
    <section className='container'>
    <div className='row justify-content-center'>

      <div className='col-md-6 mb-5'>
      <h3 className='text-center'>FAQ</h3>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                What is SafeArt?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <strong>SafeArt protocol</strong> is a project based on the use of new technology and an innovative and decentralized payment method. All fans of this world should join this project as the community will play a <strong>fundamental role</strong>.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                How can I contact you?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body> You can easily contact us using our contact form on the website or sending us an email to: administration@safeart.io or throught our social media.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Why polygon?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body> The Polygon network is a layer-2 Ethereum chain solution that has risen in popularity over the past few years to become a leading Ethereum sidechain.
                Sidechains are essential to the Ethereum network because they allow for greater innovation. They are also more dynamic when it comes to scaling because of their optimized transaction throughput. As such, they help to diversify the Ethereum ecosystem and are instrumental in decongesting it.</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>

    </div>
  </section>
  )
}

export default FAQ