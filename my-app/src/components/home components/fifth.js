import Container from "./service container";
import {MyContext} from '../../App';
import { useContext } from 'react';
import './fifth.css';
function Fifth()
{
    let v=useContext(MyContext)
    return(
        <div className='second fifth'>
            <div className={v.ismobile?'fiftxt1':'fiftxt'}>Sustainable Brands</div>
            <div className='services'>
            <Container add='b1.png' tit='
Brown Living' subtit='Buy sustainable zero-waste products from best brands.'></Container>
<Container add='b2.png' tit='
Planet Care' subtit='Buy sustainable zero-waste products from best brands.'></Container>
<Container add='b3.png' tit='
Prakati' subtit='Buy sustainable zero-waste products from best brands.'></Container>
            
            <Container add='b4.png' tit='
Ecohoy' subtit='Buy sustainable zero-waste products from best brands.'></Container>
<Container add='b5.png' tit='
The Sustainable Indian' subtit='Buy sustainable zero-waste products from best brands.'></Container>
<Container add='b6.jpg' tit='
Earthsy.in' subtit='Buy sustainable zero-waste products from best brands.'></Container>
            </div>
            <button className='view'>View All</button>
        </div>
    )
}
export default Fifth;