import React from 'react';

// this component wraps around anything that when we click will start playing a mix for us. It provides us functionality rather than any design.
const PlayMix = ({playMix, id, children, currentMix}) => (
// when our current playing minx equals the id of the mix that this component refers to, we will add a class name of 'playing'
  <div className={`pointer ${id === currentMix && 'playing'}`} 
        onClick={() => playMix(id)}>
    {children}
  </div>
);

export default PlayMix;
