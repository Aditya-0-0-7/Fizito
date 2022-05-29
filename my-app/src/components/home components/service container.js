import './service_container.css';
import {MyContext} from '../../App';
import { useContext } from 'react';
function Container(prop)
{
    let v=useContext(MyContext)
    if(v.ismobile)
    return(
        <div className='scon1'>
            <img src={require('../../pictures/'+`${prop.add}`)} className={prop.s==='0'?'imga':'img1a'}></img>
            <div className='title1'>{prop.tit}</div>
            <div className='subtitle1'>{prop.subtit}</div>
        </div>
    )
    else
    return(
        <div className='scon'>
            <img src={require('../../pictures/'+`${prop.add}`)} className={prop.s==='0'?'img':'img1'}></img>
            <div className='title'>{prop.tit}</div>
            <div className='subtitle'>{prop.subtit}</div>
        </div>
    )
}
export default Container;