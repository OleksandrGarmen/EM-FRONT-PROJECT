import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import AboutUs from './pages/Bookstore/AboutUs/AboutUs'
import Contacts from './pages/Bookstore/Contacts/index'
import BooksPage from './pages/Bookstore/BooksPage/BooksPage'
import { saveToLocalStorage } from './localstorage/localStorageHelper'
import authors from '../src/fixture/authors.json'
import categories from '../src/fixture/categories.json'
import books from '../src/fixture/books.json'
import LoginPage from './pages/Authentication/LoginPage/LoginPage'
import RegisterPage from './pages/Authentication/RegisterPage/RegisterPage'
import NotFoundPage from './pages/Bookstore/NotFound/index'

localStorage.clear()
saveToLocalStorage("categories", categories)
saveToLocalStorage("authors", authors)
saveToLocalStorage("books", books)

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/books' element={<BooksPage/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  </BrowserRouter>,
)
