import React, { Suspense } from 'react';

import Hero from './Hero';
import TopWave from './TopWave';
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
import BottomWave from './BottomWave';
import Speakers from './Speakers';

const Home = function () {
  return (
    <>
      <Hero register={Env.register} />
      <TopWave />
      <About />
      <BottomWave />
      {Env.schedule && <Schedule />}
      <Mentor mentor={Env.mentor} volunteer={Env.volunteer} />
      <Sponsorship mentor={Env.mentor} />
      <Sponsors />
      <Speakers />
      <Faq />
      <Team />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;