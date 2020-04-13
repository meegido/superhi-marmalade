import React from 'react';
import Mix from './Mix';

const Home = props => <div className='flex flex-wrap justify-between mixes ph3 ph4-l'>
{/* here we loop thourght all of our mixes */}
  <div className='mix mb4'>
    {/* here we just pass the props straight through */}
    <Mix name='Nitsa Mix' 
        id='https://api.soundcloud.com/tracks/135147847&auto_play=true' 
        {...props}
    />
  </div>
  <div className='mix mb4'>
    <Mix name='Women Affaire' 
        id='https://api.soundcloud.com/tracks/14960807&auto_play=true' 
        {...props}
    />
  </div>
  <div className='mix mb4'>
    <Mix name='Gela Mix' 
          id='https://api.soundcloud.com/tracks/567572268&auto_play=true' 
          {...props}
      />
  </div>
</div>

export default Home;
