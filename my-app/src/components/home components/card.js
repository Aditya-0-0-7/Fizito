import {useState} from 'react';
import {MyContext} from '../../App';
import { useContext } from 'react';
import './card.css';
function Card(prop)
{
    let v=useContext(MyContext)
    function urlprovider()
    {
            if(MouseEnter)
            {
                return('https://static.wixstatic.com/media/'+prop.url[0]['url'])
            }
            else
            {
                return('https://static.wixstatic.com/media/'+(prop.url[1]!=undefined?prop.url[1]['url']:prop.url[0]['url']))
            }
    }
    const[MouseEnter,updateMouse]=useState(false);
    function enterhandler()
    { 
        updateMouse(true);
    }
    function leavehandler()
    {
        updateMouse(false);
    }
    if(v.ismobile)
    return(
        <div className='card1' onMouseEnter={enterhandler} onMouseLeave={leavehandler}>
            <img className='cardimg1' src={urlprovider()}></img>
        </div>
    )
    else
    return(
        <div className='card' onMouseEnter={enterhandler} onMouseLeave={leavehandler}>
            <img className='cardimg' src={urlprovider()}></img>
        </div>
    )
}
export default Card;