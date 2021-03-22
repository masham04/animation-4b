import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';
import './App.css';

function App() {
  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: [
      {transform: 'translate(250%,0)'},
      {transform: 'translate(400%,0)'}
      
    ],
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 200, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    //onReady: ({ playState, animate, animation }) => {
      // Triggered when the animation is ready to play (Google Chrome: available in v84+)
    //},
    //onUpdate: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the running state or changes state
    //},
   // onFinish: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
    //},
    // More useful options...
  });

  
  return (
    <div className={'content'}>
      <div ref={ref} className='box'></div>
      <div className='box2'></div>
      <h2>
      Current State is: {playState}
      <button onClick={()=>getAnimation().pause()}>Pause</button>
      <button onClick={()=>getAnimation().play()}>Play</button>
      </h2>
    </div>
  );
}

export default App;
