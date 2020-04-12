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
      this.state = {
        // whether a mix is currently playing
        playing: false,
        // the id of the current mix
        currentMix: ''
      }

      this.player = React.createRef();
      this.userMix = 'https://api.soundcloud.com/users/1106112';
      this.mix = 'https://api.soundcloud.com/tracks/14960807&auto_play=true';
      this.newMix = 'https://api.soundcloud.com/tracks/567572268&auto_play=true';
  }

  mountAudio = async () => {
    // when we use the this keyword, our widget is now accesible anywhere inside the component.
    this.widget = SC.Widget(this.player.current);
    // here we wait our widget to be ready before continuing
    await this.widget.READY;
    console.log(this.widget)
    this.widget.bind(SC.Widget.Events.PAUSE, () => this.setState({
      playing: false
    }));

    this.widget.bind(SC.Widget.Events.PLAY, () => this.setState({
      playing: true
    }));
   
  }


  componentDidMount() {
    // when our app component is all loaded into the page, our componentDidMount gests called and we can be sure everything isready, so we then run our mountAduo(Method)
    this.mountAudio();
  }

  tooglePlay = async () => {
    // we want to tooglePlay() mixcloud method on our widget
    await this.widget.toggle();
  }

  playMix = async (mixName) => {
  // update the currentMix in our state with the mixID
  this.setState({
    currentMix: mixName
  })
  // load a new mix by its name and then start playing it immediately
    await this.widget.load(mixName);
  }

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
              {this.state.playing && (
                <button onClick={this.tooglePlay}>{this.state.playing ? 'Pause' : 'Play'}</button>
              )}
            </div>

            <div>
              <h1>currently playing: {this.state.currentMix}</h1>
              <button onClick={() => this.playMix(`${this.newMix}`, {auto_play: true})}>Play mix</button>

              <button onClick={() => this.playMix('https://api.soundcloud.com/tracks/135147847&auto_play=true')}>Play Nitsa mix</button>
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
            src={`https://w.soundcloud.com/player/?url=${this.mix}`}
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
