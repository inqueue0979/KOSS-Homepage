import '../styles/App.css';
import '../styles/output.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar()
{

  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []); 

  return (
    <nav className={`fixed top-0 z-50 w-full h-14 flex items-center justify-center backdrop-blur-sm ${position !== 0 && "bg-black/20"} md:h-20`}>
      <div className="max-w-xl flex justify-between p-6 w-full">
        <a className="flex" href="/">
          <img className='h-12' src="img/koss_logo.png" alt="Logo"></img>
          <img className='h-12 ml-1' src="img/koss_text.png" alt="KOSS"></img>
        </a>
      </div>
      <div className='flex items-center justify-self-endfont-regular text-white min-w-40'>
        <ul className='flex justify-center items-center list-none gap-6'>
          <li className="hidden lg:flex">
              <a href='/#introduce' className=" drop-shadow-md">소개</a>
          </li>
          <li className="hidden lg:flex">
              <a href='/#event' className="drop-shadow-md">활동</a>
          </li>
          <li className="hidden lg:flex">
              <a href='/#event' className="drop-shadow-md">이벤트</a>
          </li>
          <li className=" md:flex">
              <Link to={"/executive"} className="drop-shadow-md">운영진</Link>
          </li>
          <li className="nav-item">
              <Link to={"/recruit"} className='px-4 py-2 font-bold text-sm bg-teal-600 text-white rounded-md shadow-sm'>부원 모집</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;