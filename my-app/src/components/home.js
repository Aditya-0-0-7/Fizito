import First from './home components/first';
import Second from './home components/second';
import Third from './home components/third';
import Fourth from './home components/fourth';
import Fifth from './home components/fifth';
import Sixth from './home components/sixth';
import Seventh from './home components/seventh';
import Eight from './home components/eight';
import { useContext } from 'react';
import {MyContext} from '../App';
import './home.css';
function Home(prop)
{
    let v=useContext(MyContext)
    if(!prop.clicks)
    return(
        <div className={!v.ismobile&&!v.istablet?'display':'display1'}>
            <First></First>
            <Second></Second>
            <Third></Third>
            <Fourth></Fourth>
            <Fifth></Fifth>
            <Sixth></Sixth>
            {!v.ismobile&&<Seventh></Seventh>}
            <Eight></Eight>
        </div>
    )
}
export default Home;