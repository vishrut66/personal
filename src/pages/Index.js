import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Vishrut Donda's personal website. "}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">In brief</Link></h2>
        </div>
      </header>
      <p>
        Welcome to my website. Please feel free explore my website and get to
        <Link to="/about"> know me better </Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
        <br />
        Thank you for taking the time to visit, and I look forward to connecting with you soon.
      </p>
    </article>
  </Main>
);

export default Index;
