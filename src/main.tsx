import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AboutUs from './pages/Bookstore/AboutUs/AboutUs.tsx'
import Contacts from './pages/Bookstore/Contacts/index.tsx'
import BooksPage from './pages/Bookstore/BooksPage/BooksPage.tsx'
import { saveToLocalStorage } from './localstorage/localStorageHelper.ts'
import authors from '../src/fixture/authors.json'
import categories from '../src/fixture/categories.json'
import books from '../src/fixture/books.json'
import LoginPage from './pages/Authentication/LoginPage/LoginPage.tsx'
import RegisterPage from './pages/Authentication/RegisterPage/RegisterPage.tsx'
import NotFoundPage from './pages/Bookstore/NotFound/index.tsx'

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
