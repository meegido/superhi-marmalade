import React from 'react';
import Mix from './Mix';

const Home = () => <div className='flex flex-wrap justify-between mixes ph3 ph4-l'>
{/* here we loop thourght all of our mixes */}
  <div className='mix mb4'>
    {/* our mix goes in here */}
    <Mix name='Women Affair mix'/>
  </div>
</div>

export default Home;
