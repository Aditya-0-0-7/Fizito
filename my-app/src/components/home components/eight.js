import './eight.css';
import { useContext } from 'react';
import {MyContext} from '../../App';
function Eight()
{
    let v=useContext(MyContext)
    if(!v.ismobile&&!v.istablet)
    return(
    <>
        <div className='whole'>
            <div className='details'>
                <div className='wrapper'>
                <div className='detailheading'>Contact</div>
                <div className='detailtext'>483/14, Opp. Harikaka Compound, NH4, Belgavi-Hubli Service Road, Belgavi - Karnataka India - 590016</div>
                <div className='detailtext'>Email- info@qizaa.com</div>
                <div className='detailtext'>Call- +91 9075006557</div>
                <div>
                    <img className='social' src={require('../../pictures/fb.png')}></img>
                    <img className='social' src={require('../../pictures/insta.png')}></img>
                    <img className='social' src={require('../../pictures/twit.png')}></img>
                </div>
                </div>
                <div className='wrapper'>
                <div className='detailheading'>Shop</div>
                <a href='none' className='detailtext'>All Products</a>
                <a href='none' className='detailtext'>Lifestyle Products</a>
                <a href='none' className='detailtext'>Organic Product </a>
                <a href='none' className='detailtext'>Tableware</a>
                </div>
                <div className='wrapper'>
                <div className='detailheading'>Customer Support</div>
                <a href='none' className='detailtext'>Contact Us</a>
                <a href='none' className='detailtext'>Help Center</a>
                <a href='none' className='detailtext'>About Us</a>
                <a href='none' className='detailtext'>Careers</a>
                </div>
                <div className='wrapper'>
                <div className='detailheading'>Policy</div>
                <a href='none' className='detailtext'>Shipping & Returns </a>
                <a href='none' className='detailtext'>Terms & Conditions</a>
                <a href='none' className='detailtext'>Privacy Policy</a>
                <a href='none' className='detailtext'>FAQ</a>
                </div>
            </div>
            <div className='mess'>We accept the following paying methods</div>
            <div className='payment'>
                <img src={require('../../pictures/p1.png')} className='payimg'></img>
                <img src={require('../../pictures/p2.png')} className='payimg'></img>
                <img src={require('../../pictures/p3.png')} className='payimg'></img>
                <img src={require('../../pictures/p4.png')} className='payimg'></img>
                <img src={require('../../pictures/p5.png')} className='payimg'></img>
                <img src={require('../../pictures/p6.png')} className='payimg'></img>
            </div>
        </div>
        <div className='bottom'>
            <div className='logos'></div>
            <div className='logotexts'></div>
            <div className='right'>All Rights Reserved   © 2021 by Qizaa -  Sustainablity in Your Pocket</div>
        </div>
    </>
    )
    if(v.ismobile||v.istablet)
    return(
        <>
            <div className='whole'>
                <div className='details'>
                    <div className='wrapper'>
                    <div className='detailheading1'>Shop</div>
                    <a href='none' className='detailtext1'>All Products</a>
                    <a href='none' className='detailtext1'>Lifestyle Products</a>
                    <a href='none' className='detailtext1'>Organic Product </a>
                    <a href='none' className='detailtext1'>Tableware</a>
                    </div>
                    <div className='wrapper'>
                    <div className='detailheading1'>Customer Support</div>
                    <a href='none' className='detailtext1'>Contact Us</a>
                    <a href='none' className='detailtext1'>Help Center</a>
                    <a href='none' className='detailtext1'>About Us</a>
                    <a href='none' className='detailtext1'>Careers</a>
                    </div>
                    <div className='wrapper'>
                    <div className='detailheading1'>Policy</div>
                    <a href='none' className='detailtext1'>Shipping & Returns </a>
                    <a href='none' className='detailtext1'>Terms & Conditions</a>
                    <a href='none' className='detailtext1'>Privacy Policy</a>
                    <a href='none' className='detailtext1'>FAQ</a>
                    </div>
                </div>
                <div className='wrapper1'>
                <div className='simg'>
                        <img className='social' src={require('../../pictures/fb.png')}></img>
                        <img className='social' src={require('../../pictures/insta.png')}></img>
                        <img className='social' src={require('../../pictures/twit.png')}></img>
                    </div>
                    <div className='detailheading1'>Contact</div>
                    <div className='detailtext1'>483/14, Opp. Harikaka Compound, NH4, Belgavi-Hubli Service Road, Belgavi - Karnataka India - 590016</div>
                    <div className='detailtext1'>Email- info@qizaa.com</div>
                    <div className='detailtext1'>Call- +91 9075006557</div>
                </div>
                <div className='mess1'>We accept the following paying methods</div>
                <div className='payment1'>
                <img src={require('../../pictures/p1.png')} className='payimg'></img>
                <img src={require('../../pictures/p2.png')} className='payimg'></img>
                <img src={require('../../pictures/p3.png')} className='payimg'></img>
                <img src={require('../../pictures/p4.png')} className='payimg'></img>
                <img src={require('../../pictures/p5.png')} className='payimg'></img>
                <img src={require('../../pictures/p6.png')} className='payimg'></img>
            </div>
            </div>
            <div className='bottom'>
                <div className='logos'></div>
                <div className='logotexts'></div>
                <div className='right'>All Rights Reserved   © 2021 by Qizaa -  Sustainablity in Your Pocket</div>
            </div>
        </>
        )
}
export default Eight;