import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './gallery.css';
function Gallery()
{
    const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1200, min: 640 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1
    }
    };
    return(     
        <Carousel responsive={responsive}>
        <img src={require('../../pictures/soon/1.webp')} className='coming'></img>
        <img src={require('../../pictures/soon/2.webp')} className='coming'></img>
        <img src={require('../../pictures/soon/3.webp')} className='coming'></img>
        <img src={require('../../pictures/soon/4.webp')} className='coming'></img>
        <img src={require('../../pictures/soon/5.webp')} className='coming'></img>
        <img src={require('../../pictures/soon/6.webp')} className='coming'></img>
        <img src={require('../../pictures/soon/7.webp')} className='coming'></img>
        <img src={require('../../pictures/soon/8.webp')} className='coming'></img>
        <img src={require('../../pictures/soon/9.webp')} className='coming'></img>
        <img src={require('../../pictures/soon/10.webp')} className='coming'></img>
        <img src={require('../../pictures/soon/11.webp')} className='coming'></img>
        <img src={require('../../pictures/soon/12.webp')} className='coming'></img>
        </Carousel>
    )
}
export default Gallery;