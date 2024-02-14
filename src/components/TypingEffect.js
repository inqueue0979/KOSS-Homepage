import React, { useRef } from 'react';
import Typewriter from 'typewriter-effect';

const TypingEffect = () => {
  const typewriterRef = useRef(null);

  const startTyping = () => {
    if (typewriterRef.current) {
      typewriterRef.current.start();
    }
  };

  const stopTyping = () => {
    if (typewriterRef.current) {
      typewriterRef.current.stop();
    }
  };

  return (
    <div>
      <button onClick={startTyping}>Start Typing</button>
      <button onClick={stopTyping}>Stop Typing</button>
      <Typewriter
        onInit={(typewriter) => {
          typewriterRef.current = typewriter;
        }}
        options={{
          strings: ['Hello, World!', 'This is a typing effect.'],
          autoStart: false, // autostart 비활성화
        }}
      />
    </div>
  );
};

export default TypingEffect;
