import Container from "./service container";
import './second.css';

function Second()
{
    
    return(
        <div className='second'>
            <div className='what'>WHAT WE OFFER</div>
            <div className='quizaa1'>Qizaa is an All In One platform for Sustainable Products, B2B Sustainable Services, and Community Programs for a Sustainable Lifestyle.</div>
            <div className='services'>
                <Container className='con' s='0' add='sustainability.png' tit='
Sustainable Products' subtit='Buy sustainable zero-waste products from best brands.'></Container>
<Container className='con' s='0' add='b2b.png' tit='
B2B Services' subtit='Introducing sustainable culture in corporate environment. '></Container>
<Container className='con' s='0' add='community.png' tit='
Our Community' subtit='Introducing sustainable culture in all communities. '></Container>
            </div>
        </div>
    )
}
export default Second;