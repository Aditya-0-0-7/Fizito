import { useContext } from 'react';
import {MyContext} from '../App';
import './nav.css'
import Subbar from './subbar';
import Links from './navlinks';
function Nav()
{
    let v=useContext(MyContext)
    return(
        <>
        {!v.ismobile&&!v.istablet&&
        <div className='navbox'>
            <Links></Links>
            <Subbar></Subbar>
        </div>}
        {v.istablet&&
        <div className='outbox'>
            <Links></Links>
        </div>
        }
        {v.ismobile&&
            <div className='outbox'>
            <Links></Links>
                <div className='sub_bar2'>
                    <div className='user'></div>
                    <div className='btn1'>Join Community</div>
                </div>
            </div>
        }
        </>
    )
}
export default Nav;