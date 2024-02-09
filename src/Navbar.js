import './App.css';
import './output.css'
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
    <nav className={`fixed top-0 z-50 w-full h-14 flex items-center justify-center ${position !== 0 && "backdrop-blur-md"} md:h-20`}>
      <div className="max-w-xl flex justify-between p-6 w-full">
        <a className="flex" href="/">
          <img className='h-12' src="img/koss_logo.png" alt="Logo"></img>
          <img className='h-12 ml-1' src="img/koss_text.png" alt="KOSS"></img>
        </a>
      </div>
      <div className='flex items-center justify-self-endfont-regular text-white min-w-24'>
        <ul className='flex justify-center items-center list-none gap-6'>
          <li className="hidden lg:flex">
              <Link to={"/"} className="">소개</Link>
          </li>
          <li className="hidden lg:flex">
              <Link to={"/"} className="">활동</Link>
          </li>
          <li className="hidden lg:flex">
              <Link to={"/"} className="">이벤트</Link>
          </li>
          <li className="hidden md:flex">
              <Link to={"/executive"} className="">운영진</Link>
          </li>
          <li className="nav-item">
              <Link to={"/recruit"} className='px-4 py-2 font-bold text-sm bg-teal-600 text-white rounded-md shadow-sm'>지원하기</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;