import React, { Suspense } from 'react';
//router
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//aos
import AOS from 'aos';
import 'aos/dist/aos.css';

//components
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

import Loading from './pages/Loading';
//data
import HomeNavData from './data/Navbar/Home.js';
import PrivacyNavData from './data/Navbar/Privacy.js';
import CodeConductNavData from './data/Navbar/CodeConduct.js';

import './App.less';
import Theme from './theme';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

//firebase
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';

//pages
const Home = React.lazy(() => import('./pages/Home'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const CodeConduct = React.lazy(() => import('./pages/CodeConduct'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

var firebaseConfig = {
  apiKey: 'AIzaSyCDdAEQqSy8Pni1iKOyOB8xUDAR4I0f9Q0',
  authDomain: 'jamhacks-4d6a6.firebaseapp.com',
  databaseURL: 'https://jamhacks-4d6a6.firebaseio.com',
  projectId: 'jamhacks-4d6a6',
  storageBucket: 'jamhacks-4d6a6.appspot.com',
  messagingSenderId: '224359886930',
  appId: '1:224359886930:web:793771bdb963fd1831ef8b',
  measurementId: 'G-YBCXKJL5HW',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }

  componentDidMount() {
    var art = `     
Designed by: Kevin Gao
Developed by: Daniel Yu, Kevin Gao, Andrew Yang

Copyright (c) 2021 JAMHacks.
`;
    console.log(art);
  }

  render() {
    return (
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <ThemeProvider theme={Theme}>
            <Container>
              <Switch>
                <Route exact path="/">
                  <Navbar sections={HomeNavData} location="home" />
                  <Home />
                  <Footer />
                </Route>
                <Route exact path="/privacy-policy">
                  <Navbar sections={PrivacyNavData} location="privacy" />
                  <Privacy />
                  <Footer />
                </Route>
                <Route exact path="/code-of-conduct">
                  <Navbar sections={CodeConductNavData} location="privacy" />
                  <CodeConduct />
                  <Footer />
                </Route>
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
              </Switch>
            </Container>
          </ThemeProvider>
        </BrowserRouter>
      </Suspense>
    );
  }
}

const Container = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  background: #fbf9ff;
`;

export default App;
