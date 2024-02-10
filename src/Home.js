import './App.css';
import './output.css'

function Home()
{
    return (
        <div className="bg-stone-950 text-white">
          <div className='App-header items-center bg-bottom bg-no-repeat bg-cover bg-[url("/public/img/KOSS_bg.png")]'>
            <div className='text-center w-1/2 md:w-1/5'>
                <img className='w-full drop-shadow-2xl' alt='brick' src='img/koss_text.png'></img>
            </div>
            <div className='font-black text-2xl text-center tracking-tight md:text-4xl'>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-2xl'>안녕하세요, 오픈소스소프트웨어 학술동아리 KOSS입니다!</h1>
          </div>
        </div>
      )
}

export default Home;