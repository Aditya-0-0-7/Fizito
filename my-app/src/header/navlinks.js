import {Link } from 'react-router-dom';
import { useContext } from 'react';
import {MyContext} from '../App';
import {Con} from './header';
function Links(prop)
{
    let v=useContext(MyContext)
    let q=useContext(Con)
    const cn=(v.ismobile||v.istablet)?'links1':'links'
    function back()
    {
        q.updateclick(false)
        v.updateclicked(false)
    }
    return(
    <>
        <Link  className={cn} to=''><div onClick={back}>Home</div></Link>
        <Link  className={cn} to='/store'><div onClick={back}>Our Store</div></Link>
        <Link  className={cn} to='/tableware-products'><div onClick={back}>Tableware</div></Link>
        <Link  className={cn} to='/sustainable-packaging'><div onClick={back}>Sustainable Packaging</div></Link>
       <Link  className={cn} to='/lifestyle-products'><div onClick={back}>Lifestyle Products</div></Link>
       <Link  className={cn} to='/organic-products'><div onClick={back}>Organic Products</div></Link>
    </>)
}
export default Links;