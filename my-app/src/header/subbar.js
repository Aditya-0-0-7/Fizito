import { useContext } from 'react';
import {MyContext} from '../App';
function Subbar()
{
    let v=useContext(MyContext)
    return(
        <div className={v.istablet?'sub_bar1 add':'sub_bar'}>
                <div className='cartlogo'></div>
                <div className='cartcount'><div className='countin'>0</div></div>
                {!v.ismobile&&<div className='user'></div>}
                {!v.ismobile&&<div className='btn'>Join Community</div>}
        </div>
    )
}
export default Subbar;