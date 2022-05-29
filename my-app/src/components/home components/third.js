import Object from './object';
import Card from './card';
import './third.css';
function Third()
{
    return(
        <div className='contains'>
        <div className='shop'></div>
        <div className='itemcontain'>
            {Object.list.map((v)=>{
                return(
                    <div className='items'>
                        <Card url={v['media']}></Card>
                        <div className='itemtext'>{v['name']}</div>
                        <div className='itemprice'>&#x20B9;{v['price']}</div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}
export default Third;