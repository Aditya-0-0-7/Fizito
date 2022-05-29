import './sixth.css';
import {MyContext} from '../../App';
import { useContext } from 'react';
function Sixth()
{
    let v=useContext(MyContext)
    if(v.ismobile)
    {
        return(
        <div className='second sixth'>
            <div className='live1'>Live A Sustainable Life</div>
            <div className='join1'>Join Us Now</div>
            <input className='input1'></input>
            <button className='submit1'>Submit</button>
            <div className='services'>
                <img className='joinimg' src={require('../../pictures/create.png')}></img>
                <img className='joinimg' src={require('../../pictures/innovate.png')}></img>
                <img className='joinimg' src={require('../../pictures/scale.png')}></img>
            </div>
        </div>
        )
    }
    else
    return(
        <div className='second sixth'>
            <div className='live'>Live A Sustainable Life</div>
            <div className='join'>Join Us Now</div>
            <input className='input'></input>
            <button className='submit'>Submit</button>
            <div className='services'>
                <img className='joinimg' src={require('../../pictures/create.png')}></img>
                <img className='joinimg' src={require('../../pictures/innovate.png')}></img>
                <img className='joinimg' src={require('../../pictures/scale.png')}></img>
            </div>
        </div>
    )
}
export default Sixth;