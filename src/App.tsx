import LayoutPage from './layout/layoutPage';
import titleImage from './assets/4eb4199600309ef6a651f94f390ce288e7fbf77f.png';
import SearchInput from './components/Common/Inputs/Search';
import SubmitButton from './components/Common/Buttons/SubmitButton';
import Book from './components/Book';
import books from './fixture/books.json'
import type { BookType } from './types/BookType';
import authors from './fixture/authors.json'
import type { AuthorType } from './types/AuthorType';

import './App.css'
let bookData:BookType[] = books
let allAuthors:AuthorType[] = authors

function App() {
  return (
    <LayoutPage pageClass="home-page">
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
              </div><SubmitButton text='Search Now' />
            </div>
          </div>
          <div>
            <img src={titleImage} alt="titleImage" className='title-image' />
          </div>
        </div>
      </div>
      <div>
        <h2 className='popular-books-container'>
          Popular Books
        </h2>
        <div className='popular-books'>
          { bookData.map(element => {
              const author = allAuthors.find(a => a.id === element.authorId);
              return (
                  <Book key={element.id} {...element}>
                      <div className="author">
                          {author ? author.name : "Невідомо"}
                      </div>
                  </Book>
              )
          })}
        </div>
      </div>
    </LayoutPage>
  )
}

export default App;