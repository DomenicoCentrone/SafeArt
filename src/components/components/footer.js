import React from 'react';
import { Link } from '@reach/router';

const footer= () => (
  <footer className="footer-light">
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col">
                                    <span onClick={()=> window.open("", "_self")}>
                                        <span className="copy">&copy; SafeArt 2022</span>
                                    </span>
                                </div>
                                <div className="de-flex-col">
                                    <div className="social-icons">
                                        <a href="https://discord.gg/SqbrG9KTqd" target="_blank"><i className="fa-brands fa-discord"></i></a>
                                        <a href="https://twitter.com/SafeArt_io" target="_blank"><i className="fa fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
);
export default footer;