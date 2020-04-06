import React from 'react';
import FeatureMix from './FeatureMix';
import Header from './Header';

function App() {
  return (
    <div className="App"> 
      <div>
        {/* FeatureMix (needs styling and updating */}
        <FeatureMix />
      </div>
      <div>
        {/* Header */}
        <Header/>
        {/* Routed page */}
      </div>
      <div>
        {/* AudioPlayer */}
        <iframe 
          width="100%" 
          height="60" 
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fjuanfalibene%2Fsounds-healing-mixtape-2%2F" 
          frameBorder="0" >
        </iframe>
      </div>
    </div>
  );
}

export default App;
