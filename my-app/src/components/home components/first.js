import './first.css';
import { useContext } from 'react';
import { MyContext } from '../../App';
function First()
{
    let v=useContext(MyContext)
    if(!v.ismobile&&!v.istablet)
    return(
        <div className='pic'>
            <div className='textcontain'>
                <div className='sustain'>Sustainability In Your Pocket</div>
                <div className='build'>Building a future that 's exciting!</div>
                <button className='explore'>Explore</button>
            </div>
            <div className='inpic'></div>
        </div>
    )
    else if(v.istablet)
    return(
        <div className='pic2'>
            <div className='textcontain1'>
                <div className='sustain2'>Sustainability In Your Pocket</div>
                <div className='build2'>Building a future that 's exciting!</div>
            </div>
            <div className='inpic2'></div>
            <button className='explore2'>Explore</button>
        </div>
        )
    else if(v.ismobile)
    return(
        <div className='pic1'>
            <div className='textcontain1'>
                <div className='sustain1'>Sustainability In Your Pocket</div>
                <div className='build1'>Building a future that 's exciting!</div>
            </div>
            <div className='inpic1'></div>
            <button className='explore1'>Explore</button>
        </div> 
    )
}
export default First;