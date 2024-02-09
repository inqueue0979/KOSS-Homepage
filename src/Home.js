import './App.css';
import './output.css'

function Home()
{
    return (
        <div className="App-header items-center">
          <div className='text-center w-1/3 md:w-1/4'>
              <img className='w-full' alt='brick' src='img/rulernBrush.png'></img>
          </div>
          <div className='font-black text-2xl text-center tracking-tight md:text-4xl'>
            <h1>Keep On Studying for Society,</h1>
            <h1>소프트웨어융합대학 학술동아리 KOSS</h1>
          </div>
        </div>
      )
}

export default Home;