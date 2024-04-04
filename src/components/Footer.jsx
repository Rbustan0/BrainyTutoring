import React from 'react';

const Footer = () => {
  return (
    <footer>
    <h1>
      <p>Find Us Here:</p>
      <p>
        <div style={{ display: 'flex'}}>
          <a href='https://facebook.com' target='_blank'><img src="/facebook_logo.jpg" alt="Facebook" style={{ width: '55px', height: 'auto' }}/></a>
          <a href="https://discord.gg/mdqKYHWpXB" target='_blank'><img src="/discord.jpg" alt="Discord" style={{ width: '55px', height: 'auto' }}/></a>
          <a href="https://linkedin.com" target='_blank'><img src="/linkedIn.webp" alt="LinkedIn" style={{ width: '55px', height: 'auto' }} /></a>
          <a href="https://twitter.com" target='_blank'><img src="/twitter_logo.png" alt="Twitter" style={{ width: '70px', height: '55px' }}/></a>
        </div>
      </p>
    </h1>
    </footer>
  );
};

export default Footer;
