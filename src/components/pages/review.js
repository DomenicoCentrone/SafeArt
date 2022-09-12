import React from 'react';
import App from "../components/App";
import Stars from "../components/stars";

function review() {
  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>SafeArt Review</h1>
                    <p>A place where your reviews will remain engraved in the blockchain</p>
                </div>  
                <div className="col-md-12 text-center">
                    <App />
                </div>              
            </div>        
        </div>
    </section>
  )
}

export default review