import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import './ImgSlider.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/autoplay';

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';

const ImgSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      style={{ height: '100vh', width: '100vw' }}
    >
      <div className="ImagContaineer">
        <SwiperSlide>
          <img src={image1} alt="Slide 1" />

          <div className="text-overlay">
            <Button 
                variant="text" 
                sx={{ fontSize: '30px', color: 'white' , fontFamily: 'Roboto'}} // Set font size and color
            >
              <Link to="/Menu" className='MenuName'>Menu</Link>
                
            </Button>
        </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={image2} alt="Slide 2" />

          <div className="text-overlay"><Button 
                variant="text" 
                sx={{ fontSize: '30px', color: 'white' , fontFamily: 'Roboto'}} // Set font size and color
            >
               <Link to="/Menu" className='MenuName'>Menu</Link>
            </Button></div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={image3} alt="Slide 3" />

          

          <div className="text-overlay"><Button 
                variant="text" 
                sx={{ fontSize: '30px', color: 'white' , fontFamily: 'Roboto'}} // Set font size and color
            >
                <Link to="/Menu" className='MenuName'>Menu</Link>
            </Button></div>
          
        </SwiperSlide>
        
      </div>
    </Swiper>
    
  );
};

export default ImgSlider;
