/*global Mixcloud */
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
    this.widget = Mixcloud.PlayerWidget(this.player.current);
    // here we wait our widget to be ready before continuing
    await this.widget.ready;
  }

  componentDidMount() {
    // when our app component is all loaded into the page, our componentDidMount gests called and we can be sure everything isready, so we then run our mountAduo(Method)
    this.mountAudio();
  }

  play = async () => {
    // we want to tootlePlay() mixcloud method on our widget
    console.log('tooglePlay')
    await this.widget.play();
  }

  pause = async () => {
    await this.widget.pause();
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
              <button onClick={this.play}>Play</button>
              <button onClick={this.pause}>Pause</button>
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
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fjuanfalibene%2Fsounds-healing-mixtape-2%2F" 
            frameBorder="0" 
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
