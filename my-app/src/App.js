import React, { createContext } from 'react';  
import {Route, Routes, Navigate } from 'react-router-dom';  
import './App.css';
import Home from './components/home';
import Lifestyle from './components/lifestyle';
import Organic from './components/organic';
import Ourstore from './components/ourstore';
import Sustainable from './components/Sustainable';
import Table from './components/Tableware';
import Header from './header/header';
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react';

const MyContext = React.createContext();

function App() 
{
  const [click,updateclicked]=useState(false)
  console.log(click)
  const ismobile = useMediaQuery({ query: '(max-width: 640px)' })
  let istablet= useMediaQuery({ query: '(max-width: 1200px)' })
  istablet=!ismobile&&istablet
  return (
    <MyContext.Provider value={{ ismobile, istablet, updateclicked }}>
      <>
        <Header></Header>
        <Routes>
                <Route path='*' exact element={<Navigate to=''></Navigate>}></Route>
                <Route path='' element={<Home clicks={click}></Home>}></Route>
                <Route path='/store' element={<Ourstore></Ourstore>}></Route>
                <Route path='/tableware-products' element={<Table></Table>}></Route>
                <Route path='/sustainable-packaging'  element={<Sustainable></Sustainable>}></Route>
                <Route path='/lifestyle-products'  element={<Lifestyle></Lifestyle>}></Route>
                <Route path='/organic-products'  element={<Organic></Organic>}></Route>
            </Routes>
      </>
    </MyContext.Provider>
  );
}

export {MyContext};
export default App;
