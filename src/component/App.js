/*global SC */
import React, {Component} from 'react';
import {  
  BrowserRouter as Router,  
  Route
} from "react-router-dom";

import FeatureMix from './FeatureMix';
import Header from './Header';

const Home = () => <h1>Home</h1>
const Archive = () => <h1>Archive</h1>
const About = () => <h1>About</h1>

class App extends Component {
 constructor(props) {
    super(props)
      this.player = React.createRef();
  }

  mountAudio = async () => {
    // when we use the this keyword, our widget is now accesible anywhere inside the component.
    this.widget = SC.Widget(this.player.current);
    // here we wait our widget to be ready before continuing
    await this.widget.READY;
  }

  componentDidMount() {
    // when our app component is all loaded into the page, our componentDidMount gests called and we can be sure everything isready, so we then run our mountAduo(Method)
    this.mountAudio();
  }

  tooglePlay = async () => {
    // we want to tootlePlay() mixcloud method on our widget
    await this.widget.toggle();
   console.log('tooglePlay')
    // await this.widget.play();
  }

  // playMix = mixName => {
  // // load a new mix by its name and then start playing it immediately
  //   this.widget.load(mixName, true);
  // }

  render() {
   return (
    <Router>
      <div> 
        {/* this div contains our page (excluding audioplayer) */}
        <div className='flex-l justify-end'>
          {/* FeatureMix (needs styling and updating */}
          <FeatureMix />
          <div className='w-50-l relative z-1'>
            {/* Header */}
            <Header/>
            {/* Routed page */}
            <div>
              <button onClick={this.tooglePlay}>Play/Pause</button>
            </div>

            <div>
              {/* <button onClick={() => this.playMix('/El_Cuerpo_Del_Disco/la-casa-del-ácido-060718-pt-1')}>PlayMix</button> */}
            </div>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/archive">
              <Archive />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </div>
        </div>
        <div>
          {/* AudioPlayer */}
          <iframe 
            width="100%" 
            height="60" 
            scrolling="no" 
            frameBorder="no" 
            src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/users/807541"
            allow='autoplay'
            className='player db fixed bottom-0 z-5'
            ref={this.player}>
          </iframe>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
