import React from 'react';
import FeatureMix from './FeatureMix';
import Header from './Header';

function App() {
  return (
    // this div contains everything
    <div> 
      {/* this div contains our page (excluding audioplayer) */}
      <div className='flex-l justify-end'>
        {/* FeatureMix (needs styling and updating */}
        <FeatureMix />
         <div className='w-50-l relative z-1'>
          {/* Header */}
          <Header/>
          {/* Routed page */}
        </div>
      </div>
      <div>
        {/* AudioPlayer */}
        <iframe 
          width="100%" 
          height="60" 
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fjuanfalibene%2Fsounds-healing-mixtape-2%2F" 
          frameBorder="0" 
          className='player db fixed bottom-0 z-5'>
        </iframe>
      </div>
    </div>
  );
}

export default App;
