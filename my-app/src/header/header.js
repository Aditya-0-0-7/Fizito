import Nav from './nav'
import React, { createContext } from 'react';  
import {MyContext} from '../App';
import { useContext, useState } from 'react';
import './header.css';
import Subbar from './subbar';
const Con = React.createContext();
function Header()
{
    const [clicked,updateclick]=useState(false);
    let v=useContext(MyContext)
    const clickHandler=()=>{
        v.updateclicked(!clicked)
        updateclick(!clicked)
    }
    if(!v.ismobile&&!v.istablet)
    return(
        <Con.Provider value={{ clicked, updateclick  }}>
        <div className='headouter'>
            <div className='logo'></div>
            <div className='logotext'></div>
            <Nav ></Nav>
        </div>
        </Con.Provider>
    )
    else if(v.istablet)
    return(
        <Con.Provider value={{ clicked, updateclick  }}>
        <div className='headouter1'>
            {!clicked&&<div className='logo1'></div>}
            <div className='menu' onClick={clickHandler}>
                <span className={clicked?'upper upper_trans':'upper'}></span>
                <span className={clicked?'middle middle_trans':'middle'}></span>
                <span className={clicked?'lower lower_trans':'lower'}></span>
            </div>
            {!clicked&&<div className='navbox2'><Subbar></Subbar></div>}
            {clicked&&<Nav ></Nav>}
        </div>
        </Con.Provider>
    )
    else if(v.ismobile)
    {
        return(
            <Con.Provider value={{ clicked, updateclick }}>
    <div className='content'>
        <div className='headouter1'>
            {!clicked&&<div className='logo1'></div>}
            <div className='menu' onClick={clickHandler}>
                <span className={clicked?'upper upper_trans':'upper'}></span>
                <span className={clicked?'middle middle_trans':'middle'}></span>
                <span className={clicked?'lower lower_trans':'lower'}></span>
            </div>
        </div>
            {clicked&&<Nav ></Nav>}
            {!clicked&&<div className='navbox1'><Subbar className='add'></Subbar></div>}
        </div>
        </Con.Provider>
        )
    }
}
export {Con};
export default Header;