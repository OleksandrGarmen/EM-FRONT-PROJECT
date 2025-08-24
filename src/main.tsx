import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AboutUs from './pages/Bookstore/AboutUs/AboutUs.tsx'
import Contacts from './pages/Bookstore/Contacts/index.tsx'
import BooksPage from './pages/Bookstore/BooksPage/BooksPage.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/books' element={<BooksPage/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
  </BrowserRouter>,
)
