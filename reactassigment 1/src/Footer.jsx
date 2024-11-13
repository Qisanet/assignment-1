import React from 'react';
import './index.css';


function Footer() {
  return (
    <div className='footer'>
      <div>
        <h2>Features</h2>
        <a href="#">Cool stuff</a><br />
        <a href="#">Random feature</a><br />
        <a href="#">Team feature</a>
      </div>
      <div>
        <h2>Resources</h2>
        <a href="#">Resource</a><br />
        <a href="#">Resource name</a>
      </div>
      <div>
        <h2>About</h2>
        <a href="#">Team</a><br />
        <a href="#">Location</a>
      </div>
    </div>
  );
}

export default Footer;
