import LayoutPage from './layout/layoutPage';
import titleImage from './assets/4eb4199600309ef6a651f94f390ce288e7fbf77f.png';
import SearchInput from './components/Common/Inputs/Search';
import SubmitButton from './components/Common/Buttons/SubmitButton';
import './App.css';

function App() {
  return (
    <LayoutPage pageClass="home-page">
      <div className='title-container'>
        <div className='title-background'></div>
        <div className='title-content-wrapper'>
          <div className='title-container-left'>
            <div>
              <h2 className='title-container-title'>
                Find your next great read at our online book store
              </h2>
              <p className='title-container-text'>
                Explore our current collection
              </p>
            </div>
            <div className='title-container-bottom'>
              <SearchInput placeholder='Type your books here' backgroudColor='#9b9b9b' color='#000000' /><SubmitButton text='Search Now' />
            </div>
          </div>
          <div>
            <img src={titleImage} alt="titleImage" className='title-image' />
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

export default App;