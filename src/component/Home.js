import React from 'react';
import Mix from './Mix';

const Home = props => <div className='flex flex-wrap justify-between mixes ph3 ph4-l'>
{/* here we loop thourght all of our mixes */}
  <div className='mix mb4'>
    {/* here we just pass the props straight through */}
    <Mix name='Women Affair mix' {...props}/>
  </div>
</div>

export default Home;
