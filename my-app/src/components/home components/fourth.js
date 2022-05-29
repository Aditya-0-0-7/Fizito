import './fourth.css';
import { useContext } from 'react';
import { MyContext } from '../../App';
function Fourth()
{
    let v=useContext(MyContext)
    if(!v.ismobile&&!v.istablet)
    return(
        <div className='backimg'>
        <div className='color'>
            <div className='fcon'>
                <div className='i1'>
                    <div className='why'>Why Choose Us</div>
                    <div className='qi'>Qizaa- Sustainability In Your Pocket...</div>
                    <div className='at'>At our core, we truly believe in making the world a more sustainable and better place to live in.</div>
                </div>
                <div className='i2'>
                    <div className='row'>
                        <div className='ele'>
                            <img src={require('../../pictures/w1.png')} className='eleimg'></img>
                            <div className='eletxt'>Best Sustainable Products</div>
                        </div>
                        <div className='ele'>
                            <img src={require('../../pictures/w2.png')} className='eleimg'></img>
                            <div className='eletxt'>Way to Sustainable Life</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='ele'>
                            <img src={require('../../pictures/w3.png')} className='eleimg'></img>
                            <div className='eletxt'>Environmental Priority</div>
                        </div>
                        <div className='ele'>
                            <img src={require('../../pictures/w4.png')} className='eleimg'></img>
                            <div className='eletxt'>Community Focused</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
    else if(v.ismobile||v.istablet)
    return(
        <div className='backimg1'>
        <div className='color1'>
            <div className='fcon1'>
                <div className='i1'>
                    <div className='why1'>Why Choose Us</div>
                    <div className='qi1'>Qizaa- Sustainability In Your Pocket...</div>
                    <div className='at1'>At our core, we truly believe in making the world a more sustainable and better place to live in.</div>
                </div>
                <div className='i2b'>
                    <div className='row'>
                        <div className='ele1'>
                            <img src={require('../../pictures/w1.png')} className='eleimg1'></img>
                            <div className='eletxt1'>Best Sustainable Products</div>
                        </div>
                        <div className='ele1'>
                            <img src={require('../../pictures/w2.png')} className='eleimg1'></img>
                            <div className='eletxt1'>Way to Sustainable Life</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='ele1'>
                            <img src={require('../../pictures/w3.png')} className='eleimg1'></img>
                            <div className='eletxt1'>Environmental Priority</div>
                        </div>
                        <div className='ele1'>
                            <img src={require('../../pictures/w4.png')} className='eleimg1'></img>
                            <div className='eletxt1'>Community Focused</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Fourth