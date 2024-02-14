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
          strings: ["<span style='font-family: SUITE;'><span style='color: #14B8A6;'>K</span>ookmin Univ.<br><span style='color: #14B8A6;'>O</span>pen Source<br><span style='color: #14B8A6;'>S</span>oftware<br><span style='color: #14B8A6;'>S</span>ociety<span><br><br>오픈소스소프트웨어학술동아리<br><span style='color: #14B8A6;'>KOSS</span>를 소개합니다!<span><span>"],
          autoStart: false, // autostart 비활성화
        }}
      />
    </div>
  );
};

export default TypingEffect;
