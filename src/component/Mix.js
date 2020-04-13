import React from 'react';
import PlayButton from './PlayButton';

const Mix = ({name, playMix, currentMix}) => (
  <div className='aspect-ratio aspect-ratio--3x4 pointer bg-black' 
       onClick={() => playMix('https://api.soundcloud.com/tracks/135147847&auto_play=true')}>
    <div className='ph3 pv4 aspect-ratio--object mix-overlay'>
      <div className='flex items-center relative z-2'>
        <h1>Currently playing{currentMix}</h1>
        <h1 className='f4 f3-l mv0 white ttu biryani pr2 lh-title'>{name}</h1>
        {/* PlayButton goes here */}
        <PlayButton />
      </div>
    </div>
  </div>
)

export default Mix;
