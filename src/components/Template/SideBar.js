import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/my1.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Vishrut Donda</h2>
        <p><a href="mailto:vishrutdonda6699@gmail.com">vishrutdonda6699@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Vishrut. I enjoy building stuff. I&apos;m a student of Information technology.
        I often like working on the core side, which is why I enjoy backend development better.
        moreover, I&apos;m currently exploring Blockchain technology in depth.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Vishrut Donda.</p>
    </section>
  </section>
);

export default SideBar;
