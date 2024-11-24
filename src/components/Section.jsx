import image from '../assets/image.png'
import Form from './Form'

const Section = () => {
    
    return (
        <>
            <div className='xl:flex xl :justify-around pb-10 lg:w-4/5'>
            
                <Form />
                <div className=' px-10 lg:ml-2 mt-1 w-4/4'>
                    <img className='w-[600px] rounded-md h-96' src={image} alt="" />
                </div>
            </div>
        </>
    )
}

export default Section