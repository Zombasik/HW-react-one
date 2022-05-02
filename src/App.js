import './App.css';
import './fontawesome-free-6.0.0-web/css/all.min.css'
import './button/button.css'

function App() {
  return (
    <div className="App">
      
        <header>
          <div className='head'>
            <span><a href='#'>ТИПЫ</a></span>
            <span><a href='#'>ВОДА</a></span>
            <span><a href='#'>МОЛНИЯ</a></span>
            <span><a href='#'>ЗЕМЛЯ</a></span>
            <span><a href='#'>ВЕТЕР</a></span>
            <span><a href='#'>ОГОНЬ</a></span>
            <span><a href='#'>ЧАКРА</a></span>
          </div>
        </header>

        <main>
          <div className='background'>
          <div className='jutsy'></div>
            <div className='cont'>
              <div className='cont-head'>
                <div className='cont-head-button'>
                  <button className='cont-head-buttonOne'>Войти</button>
                  <input></input>
                  <button className='cont-head-buttonTwo'>Найти</button>
                </div>
                <div className='cont-head-button-two'>
                  <button><i class="fa-brands fa-vk"></i></button>
                  <button><i class="fa-brands fa-youtube"></i></button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

  );
}

export default App;
