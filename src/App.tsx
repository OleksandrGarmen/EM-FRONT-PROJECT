import LayoutPage from './layout/layoutPage';
import titleImage from './assets/4eb4199600309ef6a651f94f390ce288e7fbf77f.png';
import SearchInput from './components/Common/Inputs/Search';
import SubmitButton from './components/Common/Buttons/SubmitButton';
import BookComponent from './components/Book';
import ImgSlider from './components/Common/Slider/ImageSlider'

import { getReview, getAuthors, getBooks, getFullBooksData } from './localstorage/localStorageHelper'

import './App.css'

function App() {
  let books = getFullBooksData()
  let allReview = getReview()

  return (
    <LayoutPage>
      <div className='title-container'>
        <div className='title-background'></div>
        <div className='title-content-wrapper'>
          <div className='title-container-left'>
            <div className='title-container-box'>
              <h2 className='title-container-title'>
                Find your next great read at our online book store
              </h2>
              <p className='title-container-text'>
                Explore our current collection
              </p>
            </div>
            <div className='title-container-bottom'>
              <div>
                <SearchInput placeholder='Type your books here' backgroudColor='#9b9b9b' color='#000000' />
              </div>
              <div>
                <SubmitButton text='Search Now' />
              </div>
            </div>
          </div>
          <div>
            <img src={titleImage} alt="titleImage" className='title-image' />
          </div>
        </div>
      </div>
      <div className='popular-books-container'>
        <h2 className='popular-books-title'>
          Popular Books
        </h2>
        <div className='popular-books'>
          { books.slice(0, 8).map(element => {
              return (
                  <BookComponent key={element.id} {...element}>
                      <div className="children-price">
                          <p>{element.price}</p>
                      </div>
                  </BookComponent>
              )
          })}
        </div>
      </div>
      <div className='alert-container'>
          <h2 className='alert-title'>Start your reading journey</h2>
          <p className='alert-text'>No subscription needed. Drive into a world of stories today.</p>
          <div className='alert-button'>
            <SubmitButton text='Start Buying'/>
          </div>
      </div>
      <div className='image-slider-main'>
        <h2 className='image-slider-title'>Buyer’s feedback</h2>
        <div>
          <ImgSlider feedbackFixture={allReview} />
        </div>
      </div>
    </LayoutPage>
  )
}

export default App;