import React, { Suspense } from 'react';

import Hero from './Hero';
import About from './About';
import Mentor from './Mentor';
import Schedule from './Schedule';
import Sponsorship from './Sponsorship';
import Sponsors from './Sponsors';
import Faq from './Faq';
import Team from './Team';
import Blog from './Blog';
import Contact from './Contact';

import Env from '../../data/env';

const Home = () => {
  return (
    <>
      <Hero register={Env.register} />
      <About />
      {Env.schedule && <Schedule />}
      {Env.register && <Mentor mentor={Env.mentor} volunteer={Env.volunteer} />}
      <Sponsorship />
      <Sponsors />
      <Faq />
      <Team />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
