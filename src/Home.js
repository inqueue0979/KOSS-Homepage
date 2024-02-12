import './App.css';
import './output.css';
import React, { useEffect, useRef } from 'react';
import TypeWriter from 'typewriter-effect';

const card_contents = [
  {
    id: 1,
    title: "활동 부원 수",
    content: "78명"
  },
  {
    id: 2,
    title: "작년 대회 본선 진출 팀 수",
    content: "5팀"
  },
  {
    id: 3,
    title: "개설된 스터디 수",
    content: "15개"
  },
  {
    id: 4,
    title: "작년 진행된 이벤트 수",
    content: "8번"
  },
  {
    id: 5,
    title: "모각코 활동 팀 수",
    content: "18팀"
  },
  {
    id: 6,
    title: "우리 마음 속 KOSS 순위 😉",
    content: "1위"
  }
];

function OpeningCard(props) {
  return (
    <div className='card_elements h-48 justify-center'>
      <div className="top">
        <h1 className='font-normal'>{props.title}</h1>
      </div>
      <div className="bottom">
        <p className='text-5xl font-bold'>{props.content}</p>
      </div>
    </div>
  );
}

function Home() {
  const typewriterRef = useRef(null);
  const typeWriterElementRef = useRef(null);

  const startTyping = () => {
    if (typewriterRef.current) {
      typewriterRef.current.typeString("<span style='font-family: SUITE;'><span style='color: #14B8A6;'>K</span>ookmin Univ.<br><span style='color: #14B8A6;'>O</span>pen Source<br><span style='color: #14B8A6;'>S</span>oftware<br><span style='color: #14B8A6;'>S</span>ociety<span><br><br>오픈소스소프트웨어학술동아리<br><span style='color: #14B8A6;'>KOSS</span>를 소개합니다!<span><span>").start();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTyping();
            observer.unobserve(entry.target); // 한 번 실행 후 관찰 중단
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(typeWriterElementRef.current);

    return () => {
      observer.disconnect();
    };
  }, []); // 빈 배열 전달로 한 번만 실행되도록 설정

  const lis = card_contents.map((content) => (
    <OpeningCard key={content.id} title={content.title} content={content.content} />
  ));

  return (
    <div className="bg-stone-950 text-white">
      <div className='App-header items-center bg-bottom bg-no-repeat bg-cover bg-[url("/public/img/KOSS_bg.jpg")] Bottom-inner-shadow'>
        <div className='text-center w-1/2 md:w-1/5'>
            <img className='w-full drop-shadow-2xl' alt='brick' src='img/koss_text.png'></img>
        </div>
      </div>
      <div className='App-header font-black text-2xl md:text-3xl xl:text-5xl' id='introduce'>
        <div className='text-left' ref={typeWriterElementRef}>
          <TypeWriter
            onInit={(typewriter) => {
              typewriterRef.current = typewriter;
            }}
            options={{
              strings: [''],
              autoStart: false,
              delay: 50,
              deleteSpeed: 30
            }}
          />
        </div>
      </div>
      <div className='text-center mt-80'>
        <div className=' mt-16 text-center inline-grid w-2/3 gap-8 grid-cols-2 xl:grid-cols-3'>
          {lis}
        </div>
      </div>
    </div>
  );
}

export default Home;
