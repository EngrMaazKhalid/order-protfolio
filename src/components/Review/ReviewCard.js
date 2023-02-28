import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/autoplay';
import classes from './Review.module.css'

import './style.css'
// import required modules
import {EffectFade, Pagination, Navigation, Autoplay , Mousewheel, Keyboard} from "swiper";



const ReviewCard =(props) =>{


    const data = [
        { id:'0',
        name: 'maaz',
        paragraph:'"s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"',
        image:require('./images.jpg')},
        { id:'01',
        name: 'Jimmy Anderson',
        paragraph:'"s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"',
        image:require('./images.jpg')},
        { id:'02',
        name: 'Jos Buttler',
        paragraph:'"s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"',
        image:require('./images.jpg')},
        { id:'03',
        name: 'Zak Crawley',
        paragraph:'"s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"',
        image:require('./images.jpg')},
        { id:'04',
        name: 'Ben Stokes',
        paragraph:'"s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"',
        image:require('./images.jpg')}
        
     ]



  return (

      <div className={classes['Review']} id='review'>  
<h1 className={classes['heading']}>Reviews</h1>
         

      <Swiper
   cssMode={true}
    pagination={{clickable:true}}
   mousewheel={true}
   keyboard={true}
   
        autoplay={{
         delay: 7500,   
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay, Mousewheel, Keyboard]}
        className="mySwiper"
      >
    
       
    {data.map(user =>(
        <SwiperSlide  key={user.id} className="swiper-slide">
            <div className={classes['Slider']}>
                <div className={classes['Main']}>
        <img src={user.image} className={classes['User-img']}></img>
        <p className={classes['paragraph']}>{user.paragraph} </p> 
        <h5 className={classes['Name']}>{user.name}</h5>

            </div></div>
        </SwiperSlide>
        
    
       
        ))}
      </Swiper>
      </div>
  );
}

export default ReviewCard;
