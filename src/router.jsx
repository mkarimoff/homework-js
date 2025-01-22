import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import HomeComponent from './component/home'
import  AboutComponent  from './pages/about/about'
import { MenuComponent } from './pages/menu/menu'
import { ContactComponent } from './pages/contact/contact'
import { PagesComponent } from './pages/pages/pages'
import { Navbar } from './component/navbar'
import { Footer } from './component/footer'
import DetailPage from './detail/menudetail'
import PageDetail from './detail/pagedetail'
import MenuDetail from './detail/menudetail'
import ScrollToTop from './pages/scrolltop'

const RouterComponent = () => {
  return (
    <>
    <Navbar/>
    <ScrollToTop/>
    <Routes>
        <Route path='/' element= {<HomeComponent/>}/>
        <Route path='/about' element= {<AboutComponent/>}/>
        <Route path='/menu' element= {<MenuComponent/>}/>
        <Route path='/pages' element= {<PagesComponent/>}/>
        <Route path='/contact' element= {<ContactComponent/>}/>
        <Route path= '/detail' element= {<DetailPage/>}/>
        <Route path= '/PageDetail/:id' element= {<PageDetail/>}/>
        <Route path= '/MenuDetail/:id' element= {<MenuDetail/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
export default RouterComponent